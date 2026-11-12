import axios, { type AxiosAdapter, type AxiosResponse } from 'axios';

const CACHE_TTL_MS = 30_000;
const MAX_CACHE_ENTRIES = 80;

type CacheEntry = {
  expiresAt: number;
  response: AxiosResponse;
};

const responseCache = new Map<string, CacheEntry>();
const inFlightRequests = new Map<string, Promise<AxiosResponse>>();

const defaultAdapter = axios.getAdapter(axios.defaults.adapter);

function cacheKey(config: Parameters<AxiosAdapter>[0]) {
  const base = config.baseURL ? config.baseURL.replace(/\/$/, '') : '';
  const url = config.url ?? '';
  const params =
    typeof config.params === 'string'
      ? config.params
      : config.params
        ? JSON.stringify(config.params)
        : '';

  return [config.method?.toUpperCase() ?? 'GET', base, url, params].join('|');
}

function cloneResponse(
  response: AxiosResponse,
  config: Parameters<AxiosAdapter>[0],
): AxiosResponse {
  return {
    ...response,
    config,
    data:
      response.data && typeof response.data === 'object'
        ? JSON.parse(JSON.stringify(response.data))
        : response.data,
  };
}

const browserCacheAdapter: AxiosAdapter = async (config) => {
  const isPublicGet =
    typeof window !== 'undefined' &&
    config.method?.toUpperCase() === 'GET' &&
    !config.headers?.get?.('authorization') &&
    true;

  if (!isPublicGet) {
    return defaultAdapter(config);
  }

  const key = cacheKey(config);
  const now = Date.now();
  const cached = responseCache.get(key);

  if (cached && cached.expiresAt > now) {
    return cloneResponse(cached.response, config);
  }

  if (cached) responseCache.delete(key);

  const pending = inFlightRequests.get(key);
  if (pending) {
    return cloneResponse(await pending, config);
  }

  const request = defaultAdapter(config);
  inFlightRequests.set(key, request);

  try {
    const response = await request;
    const cacheControl = String(response.headers?.['cache-control'] ?? '').toLowerCase();
    const isCacheable =
      response.status >= 200 &&
      response.status < 300 &&
      !cacheControl.includes('no-store') &&
      !cacheControl.includes('private');

    if (isCacheable) {
      responseCache.set(key, {
        response: cloneResponse(response, config),
        expiresAt: Date.now() + CACHE_TTL_MS,
      });

      if (responseCache.size > MAX_CACHE_ENTRIES) {
        const oldestKey = responseCache.keys().next().value;
        if (oldestKey) responseCache.delete(oldestKey);
      }
    }

    return response;
  } finally {
    inFlightRequests.delete(key);
  }
};

/**
 * Shared HTTP client for public API requests.
 *
 * Browser GET requests are briefly cached in memory and concurrent identical
 * requests are deduplicated. Authenticated requests and mutations always
 * bypass this cache. The cache is intentionally short-lived for news content.
 */
export const apiClient = axios.create({
  adapter: browserCacheAdapter,
  timeout: 10_000,
  headers: {
    Accept: 'application/json',
  },
});

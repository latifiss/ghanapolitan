import axios from 'axios';

/**
 * Shared HTTP client for public API requests.
 *
 * A finite timeout prevents slow upstream services from leaving pages in a
 * permanent loading state. Keep credentials and private headers out of this
 * client because it is also used by browser-side components.
 */
export const apiClient = axios.create({
  timeout: 15_000,
  headers: {
    Accept: 'application/json',
  },
});

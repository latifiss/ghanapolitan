// Re-export all types from your stocks API
export type {
  Profile,
  Statistics,
  Dividends,
  Earnings,
  Financial,
  Holders,
  PriceHistory
} from '@/lib/api/stocks';

// Define CompanyData interface
export interface CompanyData {
  profile: Profile | null;
  statistics: Statistics | null;
  dividends: Dividends | null;
  earnings: Earnings | null;
  financial: Financial | null;
  holders: Holders | null;
  priceHistory: PriceHistory | null;
}
import { BaseDomain } from './base-domain';

/* Defines the product entity */
export interface Product extends BaseDomain {
  productName: string;
  productCode: string;
  tags?: string[];
  releaseDate?: string;
  price?: number;
  description: string;
  starRating?: number;
  imageUrl?: string;
}


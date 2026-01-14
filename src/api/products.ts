import { Product } from '../models/Product';
import { MOCK_PRODUCTS } from './mockData';

const SIMULATED_DELAY_MS = 600;
const SHOULD_FAIL = false;

export const getProductList = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SHOULD_FAIL) {
        reject(new Error('Failed to fetch products. Please try again.'));
      } else {
        resolve([...MOCK_PRODUCTS]);
      }
    }, SIMULATED_DELAY_MS);
  });
};

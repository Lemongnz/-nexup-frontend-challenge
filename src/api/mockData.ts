import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 1.5,
  },
  {
    id: 2,
    name: 'Banana',
    status: ProductStatus.Inactive,
    category: ProductCategory.Fruit,
    price: 0.99,
  },
  {
    id: 3,
    name: 'Carrot',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 0.5,
  },
  {
    id: 4,
    name: 'Steak',
    status: ProductStatus.Active,
    category: ProductCategory.Meat,
    price: 15.0,
  },
  {
    id: 5,
    name: 'Broccoli',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 2.3,
  },
  {
    id: 6,
    name: 'Chicken Breast',
    status: ProductStatus.Inactive,
    category: ProductCategory.Meat,
    price: 8.5,
  },
  {
    id: 7,
    name: 'Orange',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 1.25,
  },
  {
    id: 8,
    name: 'Spinach',
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    price: 1.8,
  },
];

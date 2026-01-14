import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';

export const ProductManager: React.FC = () => {
  return (
    <div>
      <CategoryFilter currentCategory="All" onCategoryChange={() => {}} />
      <ProductList productList={[]} />
    </div>
  );
};

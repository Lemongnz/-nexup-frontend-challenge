import React, { useState } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { useProducts } from '../hooks/useProducts';
import { CategoryFilterOption } from '../models/types';

export const ProductManager: React.FC = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterOption>('All');

  const handleCategoryChange = (category: CategoryFilterOption) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'All') {
      return true;
    }
    return product.category === selectedCategory;
  });

  return (
    <div>
      <CategoryFilter
        currentCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList productList={filteredProducts} />
    </div>
  );
};

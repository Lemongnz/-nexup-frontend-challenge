import React, { useState } from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { useProducts } from '../hooks/useProducts';
import { CategoryFilterOption } from '../models/types';

import './ProductManager.css';

export const ProductManager: React.FC = () => {
  const { products, loading, error, retry } = useProducts();
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

  if (loading) {
    return (
      <div className="product-manager__loading">Cargando productos...</div>
    );
  }

  if (error) {
    return (
      <div className="product-manager__error">
        <p>Error: {error}</p>
        <button
          type="button"
          onClick={retry}
          className="product-manager__retry-button"
        >
          Reintentar
        </button>
      </div>
    );
  }

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

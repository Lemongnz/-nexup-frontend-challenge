import React from 'react';
import { Product } from '../models/Product';
import { ProductItem } from './ProductItem';
import './ProductList.css';

interface ProductListProps {
  productList: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  if (productList.length === 0) {
    return (
      <div className="product-list__empty">
        <p>No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

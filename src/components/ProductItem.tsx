import React from 'react';
import { Product } from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';
import { formatPrice } from '../utils/formatters';
import './ProductItem.css';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const statusClass =
    product.status === ProductStatus.Active
      ? 'product-item__status--active'
      : 'product-item__status--inactive';

  return (
    <div className="product-item" data-testid={`product-${product.id}`}>
      <div className="product-item__header">
        <h3 className="product-item__name">{product.name}</h3>
        <span
          className={`product-item__status ${statusClass}`}
          title={`Status: ${product.status}`}
          aria-label={`Status: ${product.status}`}
        />
      </div>
      <span className="product-item__category">{product.category}</span>
      <span className="product-item__price">{formatPrice(product.price)}</span>
    </div>
  );
};

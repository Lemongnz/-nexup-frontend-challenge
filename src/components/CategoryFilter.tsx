import React, { useMemo } from 'react';
import { ProductCategory } from '../models/ProductCategory';
import { CategoryFilterOption } from '../models/types';
import './CategoryFilter.css';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface CategoryFilterProps {
  currentCategory: CategoryFilterOption;
  onCategoryChange: (category: CategoryFilterOption) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  currentCategory,
  onCategoryChange,
}) => {
  const options = useMemo(() => {
    // Generate options dynamically from the Enum
    return Object.values(ProductCategory);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value as CategoryFilterOption);
    event.target.blur(); // Remove focus after selection to reset arrow rotation
  };

  return (
    <div className="category-filter">
      <label htmlFor="category-select" className="category-filter__label">
        Categoría:
      </label>
      <div className="category-filter__control">
        <select
          id="category-select"
          value={currentCategory}
          onChange={handleChange}
          className="category-filter__select"
        >
          <option value="All">Todos</option>
          {options.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ChevronDownIcon />
      </div>
    </div>
  );
};

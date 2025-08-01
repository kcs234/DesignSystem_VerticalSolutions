import React from 'react';
import { SearchIcon } from '../Buttons';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  value,
  onChange,
  className
}) => {
  return (
    <div className={`${styles.searchBox} ${className || ''}`}>
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}; 
import React from 'react';
import styles from './Buttons.module.css';

export const DropdownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10l5 5 5-5" stroke="#4C5353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" stroke="#4C5353" strokeWidth="2" fill="none"/>
  </svg>
);

export const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="#4C5353" strokeWidth="2"/>
    <path d="m21 21-4.35-4.35" stroke="#4C5353" strokeWidth="2"/>
  </svg>
);

interface DropdownButtonProps {
  label: string;
  value?: string;
  onClick?: () => void;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ label, value, onClick }) => (
  <button className={styles.dropdownButton} onClick={onClick}>
    <span className={styles.dropdownLabel}>
      <b>{label}:</b> {value && <span className={styles.dropdownValue}>{value}</span>}
    </span>
    <DropdownIcon />
  </button>
);

interface IconLabelButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const IconLabelButton: React.FC<IconLabelButtonProps> = ({ label, icon, onClick }) => (
  <button className={styles.iconLabelButton} onClick={onClick}>
    <span>{label}</span>
    {icon || <FilterIcon />}
  </button>
);

interface FilledButtonProps {
  label: string;
  onClick?: () => void;
}

export const FilledButton: React.FC<FilledButtonProps> = ({ label, onClick }) => (
  <button className={styles.filledButton} onClick={onClick}>
    {label}
  </button>
);

export const Buttons: React.FC = () => (
  <div className={styles.buttonsGroup}>
    {/* Dropdown Button */}
    <DropdownButton label="QC Status" value="All" />
    {/* Icon + Label Button */}
    <IconLabelButton label="All filters" />
    {/* Filled Button */}
    <FilledButton label="Mark as closed" />
  </div>
); 
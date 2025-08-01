import React from 'react';
import styles from './FilterPills.module.css';

export type FilterPill = {
  label: string;
  selected?: boolean;
};

export type FilterPillsProps = {
  pills: FilterPill[];
  onSelect?: (label: string) => void;
};

export const FilterPills: React.FC<FilterPillsProps> = ({ pills, onSelect }) => {
  return (
    <div className={styles.pillsRow}>
      {pills.map((pill) => (
        <button
          key={pill.label}
          className={pill.selected ? styles.selected : styles.unselected}
          onClick={() => onSelect?.(pill.label)}
          type="button"
        >
          {pill.label}
        </button>
      ))}
    </div>
  );
}; 
import React from 'react';
import styles from './MapView.module.css';
import { FilterPills } from '../FilterPills';

const DropdownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5" stroke="#4C5353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const pills = [
  { label: 'All branches', selected: true },
  { label: 'West coast' },
  { label: 'Mid-west' },
  { label: 'South-west' },
  { label: 'East coast' },
];

export const MapView: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.pillsRow}>
          <FilterPills pills={pills} onSelect={() => {}} />
        </div>
        <div className={styles.dropdownGroup}>
          <button className={styles.dropdownButton}>
            <span className={styles.dropdownLabel}><b>Risk score</b></span>
            <DropdownIcon />
          </button>
          <button className={styles.dropdownButton}>
            <span className={styles.dropdownLabel}><b>Q4 2024</b></span>
            <DropdownIcon />
          </button>
        </div>
      </div>
      <div className={styles.mapArea}>
        {/* Placeholder for map image */}
        <div className={styles.mapPlaceholder}>Map goes here</div>
      </div>
    </div>
  );
}; 
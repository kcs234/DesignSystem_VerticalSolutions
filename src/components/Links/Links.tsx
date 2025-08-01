import React from 'react';
import styles from './Links.module.css';

const BackArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="#1E6482" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export const Links: React.FC = () => (
  <div className={styles.linksGroup}>
    {/* Link with icon */}
    <a href="#" className={styles.linkWithIcon}>
      <BackArrowIcon />
      <span>Back</span>
    </a>
    {/* Link with label only */}
    <a href="#" className={styles.linkLabelOnly}>
      View activity timeline
    </a>
  </div>
); 
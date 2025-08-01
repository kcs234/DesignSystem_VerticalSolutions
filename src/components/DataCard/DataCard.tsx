import React from 'react';
import styles from './DataCard.module.css';

type DataCardVariant = 'number' | 'numberOfTotal' | 'percentage' | 'currency';

export type DataCardProps =
  | {
      variant: 'number';
      title: string;
      value: string | number;
    }
  | {
      variant: 'numberOfTotal';
      title: string;
      value: string | number;
      total: string | number;
    }
  | {
      variant: 'percentage';
      title: string;
      value: string | number;
      unit?: string; // e.g. '%'
    }
  | {
      variant: 'currency';
      title: string;
      value: string | number;
      unit: string; // e.g. 'Million USD'
    };

export const DataCard: React.FC<DataCardProps> = (props) => {
  const { title } = props;
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.valueRow}>
        {props.variant === 'number' && (
          <span className={styles.hero}>{props.value}</span>
        )}
        {props.variant === 'numberOfTotal' && (
          <span>
            <span className={styles.hero}>{props.value}</span>
            <span className={styles.total}> of {props.total}</span>
          </span>
        )}
        {props.variant === 'percentage' && (
          <span>
            <span className={styles.hero}>{props.value}</span>
            <span className={styles.total}> {props.unit || '%'}</span>
          </span>
        )}
        {props.variant === 'currency' && (
          <span>
            <span className={styles.hero}>{props.value}</span>
            <span className={styles.total}> {props.unit}</span>
          </span>
        )}
      </div>
    </div>
  );
}; 
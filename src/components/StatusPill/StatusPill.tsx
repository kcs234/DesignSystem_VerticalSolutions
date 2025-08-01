import React from 'react';
import styles from './StatusPill.module.css';

export type StatusType = 'info' | 'pending' | 'warning' | 'success' | 'done';

export interface StatusPillProps {
  label: string;
  status: StatusType;
  className?: string;
  style?: React.CSSProperties;
}

const statusClassMap: Record<StatusType, string> = {
  info: styles.info,
  pending: styles.pending,
  warning: styles.warning,
  success: styles.success,
  done: styles.done,
};

export const StatusPill: React.FC<StatusPillProps> = ({ label, status, className = '', style = {} }) => {
  return (
    <span className={`${styles.pill} ${statusClassMap[status]} ${className}`} style={style}>
      {label}
    </span>
  );
}; 
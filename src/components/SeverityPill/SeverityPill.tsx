import React from 'react';
import styles from './SeverityPill.module.css';
import { colors } from '../../tokens/colors';
import { CriticalIcon, HighIcon, MediumIcon, LowIcon } from './SeverityIcons';

export type SeverityType = 'critical' | 'high' | 'medium' | 'low';

export interface SeverityPillProps {
  type: SeverityType;
  count?: number;
  showCount?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LABELS: Record<SeverityType, string> = {
  critical: 'Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

const ICONS: Record<SeverityType, React.ComponentType> = {
  critical: CriticalIcon,
  high: HighIcon,
  medium: MediumIcon,
  low: LowIcon,
};

export const SeverityPill: React.FC<SeverityPillProps> = ({ type, count, showCount = true, className = '', style = {} }) => {
  const Icon = ICONS[type];
  return (
    <div
      className={`${styles.pill} ${className}`}
      style={style}
    >
      {showCount && typeof count === 'number' && (
        <span className={styles.count}>{count}</span>
      )}
      <span className={styles.iconWrapper}>
        <Icon />
      </span>
      <span className={styles.label}>{LABELS[type]}</span>
    </div>
  );
}; 
import React from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  variant:
    | 'h2Bold'
    | 'h4Bold'
    | 'mBold'
    | 'm'
    | 's'
    | 'xs';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  style = {},
}) => {
  return (
    <span className={`${styles[variant]} ${className}`} style={style}>
      {children}
    </span>
  );
}; 
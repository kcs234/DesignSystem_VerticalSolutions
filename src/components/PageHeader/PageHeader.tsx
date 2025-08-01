import React from 'react';
import { IoNotifications, IoHelpCircle } from 'react-icons/io5';
import styles from './PageHeader.module.css';

// SVG Icons as React components
export const NotificationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16C9.1 16 10 15.1 10 14H6C6 15.1 6.9 16 8 16Z" fill="#ffffff"/>
    <path d="M12 11V7C12 4.52 10.68 2.42 8.5 1.89V1.5C8.5 0.67 7.83 0 7 0C6.17 0 5.5 0.67 5.5 1.5V1.89C3.32 2.42 2 4.51 2 7V11L0 13V14H14V13L12 11Z" fill="#ffffff"/>
  </svg>
);

export const HelpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7.5" stroke="#ffffff" strokeWidth="1" fill="none"/>
    <path d="M8 12H8.01" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8V10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const VerticalLineIcon = () => (
  <svg width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="2" x2="1" y2="22" stroke="#FFFFFF" strokeWidth="1"/>
  </svg>
);

// Default company logo placeholder
export const DefaultCompanyLogo = () => (
  <svg width="83" height="24" viewBox="0 0 83 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="83" height="24" fill="#FFFFFF" rx="4"/>
    <text x="41.5" y="15" textAnchor="middle" fill="#4C5353" fontSize="10" fontFamily="Arial, sans-serif">UiPath</text>
  </svg>
);

// Default customer logo placeholder
export const DefaultCustomerLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="32" height="32" fill="#4C5353" rx="8"/>
    <text x="16" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="Arial, sans-serif">C</text>
  </svg>
);

export interface PageHeaderProps {
  customerName: string;
  customerLogo?: string;
  companyLogo?: string;
  userInitial?: string;
  poweredByText?: string;
  onNotificationClick?: () => void;
  onHelpClick?: () => void;
  onUserClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  customerName,
  customerLogo,
  companyLogo,
  userInitial = 'M',
  poweredByText = 'Powered by',
  onNotificationClick,
  onHelpClick,
  onUserClick,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.customerInfo}>
            <div className={styles.customerLogo}>
              {customerLogo ? (
                <div 
                  className={styles.customerLogoImage}
                  style={{ backgroundImage: `url('${customerLogo}')` }}
                />
              ) : (
                <DefaultCustomerLogo />
              )}
            </div>
            <div className={styles.customerName}>
              {customerName}
            </div>
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.poweredBySection}>
            <div className={styles.poweredByText}>
              {poweredByText}
            </div>
            <div className={styles.companyLogo}>
              {companyLogo ? (
                <img src={companyLogo} alt="Company Logo" />
              ) : (
                <DefaultCompanyLogo />
              )}
            </div>
            <div className={styles.verticalLine}>
              <VerticalLineIcon />
            </div>
          </div>
          
          <div className={styles.actionButtons}>
            <button 
              className={styles.iconButton}
              onClick={onNotificationClick}
              aria-label="Notifications"
            >
              <IoNotifications size={16} style={{ color: '#ffffff' }} />
            </button>
            
            <button 
              className={styles.iconButton}
              onClick={onHelpClick}
              aria-label="Help"
            >
              <IoHelpCircle size={16} style={{ color: '#ffffff' }} />
            </button>
            
            <button 
              className={styles.userAvatar}
              onClick={onUserClick}
              aria-label="User menu"
            >
              {userInitial}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 
import React from 'react';
import styles from './IssueDetails.module.css';
import { Typography } from '../Typography';
import { StatusPill } from '../StatusPill';

export interface IssueDetailsProps {
  title: string;
  statusLabel: string;
  company: string;
  loanType: string;
  loanAmount: string;
  reviewDeadline: string;
  loanContact: string;
  status: string;
  onShowDetails?: () => void;
}

export const IssueDetails: React.FC<IssueDetailsProps> = ({
  title,
  statusLabel,
  company,
  loanType,
  loanAmount,
  reviewDeadline,
  loanContact,
  status,
  onShowDetails,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <div className={styles.titleRow}>
          <Typography variant="h2Bold" className={styles.title}>{title}</Typography>
          <StatusPill status="info" label={statusLabel} />
        </div>
      </div>
      <div className={styles.detailsRow}>
        <div className={styles.detailCol}>
          <Typography variant="s" className={styles.detailLabel}>Company</Typography>
          <Typography variant="mBold" className={styles.detailValue}>{company}</Typography>
        </div>
        <div className={styles.detailCol}>
          <Typography variant="s" className={styles.detailLabel}>Loan type</Typography>
          <Typography variant="mBold" className={styles.detailValue}>{loanType}</Typography>
        </div>
        <div className={styles.detailCol}>
          <Typography variant="s" className={styles.detailLabel}>Loan amount</Typography>
          <Typography variant="mBold" className={styles.detailValue}>{loanAmount}</Typography>
        </div>
        <div className={styles.detailCol}>
          <Typography variant="s" className={styles.detailLabel}>Review deadline</Typography>
          <Typography variant="mBold" className={styles.detailValue}>{reviewDeadline}</Typography>
        </div>
        <div className={styles.detailCol}>
          <Typography variant="s" className={styles.detailLabel}>Loan contact</Typography>
          <Typography variant="mBold" className={styles.detailValue}>{loanContact}</Typography>
        </div>
        <div className={styles.detailCol}>
          <Typography variant="s" className={styles.detailLabel}>Status</Typography>
          <Typography variant="mBold" className={styles.detailValue}>{status}</Typography>
        </div>
      </div>
      <div className={styles.showDetailsRow}>
        <button className={styles.showDetailsButton} onClick={onShowDetails} type="button">
          <span className={styles.chevronIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5" stroke="#1E6482" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <Typography variant="m" className={styles.showDetailsText}>Show details</Typography>
        </button>
      </div>
    </div>
  );
}; 
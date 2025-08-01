import React from 'react';
import { ComplianceDashboard } from '../ComplianceDashboard';
import { colors } from '../../tokens/colors';
import styles from './PageLayoutTemplates.module.css';

interface PageLayoutTemplatesProps {
  onBackToComponents: () => void;
}

const BackArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18l-6-6 6-6" stroke="#1E6482" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PageLayoutTemplates: React.FC<PageLayoutTemplatesProps> = ({ onBackToComponents }) => {
  return (
    <div className={styles.container}>
      {/* Header with back navigation */}
      <div className={styles.header}>
        <button onClick={onBackToComponents} className={styles.backButton}>
          <BackArrowIcon />
          <span>Back to Components</span>
        </button>
        <h1 className={styles.title}>Page Layout Templates</h1>
      </div>

      {/* Page Layout Templates Content */}
      <div className={styles.content}>
        <section className={styles.intro}>
          <p style={{ color: colors.foregroundSecondary, fontSize: '16px', lineHeight: '24px', margin: 0 }}>
            Complete page templates built with our design system components. These templates provide ready-to-use layouts for common application patterns.
          </p>
        </section>

        {/* Compliance Dashboard */}
        <section id="compliance-dashboard" className={styles.templateSection}>
          <h2 className={styles.sectionTitle}>Compliance Dashboard</h2>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <div className={styles.templateDescription}>
                <p style={{ color: colors.foregroundSecondary, marginBottom: 16 }}>
                  A comprehensive compliance dashboard template featuring key metrics, loan application management, and status tracking. Built with DataCard, StatusPill, SeverityPill, and Table components.
                </p>
                <div style={{ marginBottom: 16 }}>
                  <h3 className={styles.subsectionTitle}>Components Used:</h3>
                  <ul className={styles.componentList}>
                    <li>Typography (h2Bold, h4Bold, m, mBold)</li>
                    <li>DataCard (numberOfTotal, currency, percentage)</li>
                    <li>StatusPill (warning, pending, success)</li>
                    <li>SeverityPill (critical, high)</li>
                    <li>Custom table with search and filter controls</li>
                  </ul>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <h3 className={styles.subsectionTitle}>Features:</h3>
                  <ul className={styles.featureList}>
                    <li>Key metrics dashboard with 4 stat cards</li>
                    <li>Loan applications table with status tracking</li>
                    <li>Search and filter functionality</li>
                    <li>Responsive design</li>
                    <li>Severity indicators for high-impact issues</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.templatePreview}>
                <ComplianceDashboard />
              </div>
            </div>
          </div>
        </section>

        {/* Insights and ROI Page */}
        <section id="insights-roi-page" className={styles.templateSection}>
          <h2 className={styles.sectionTitle}>Insights and ROI Page</h2>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <div className={styles.templateDescription}>
                <p style={{ color: colors.foregroundSecondary }}>
                  A template for presenting insights and ROI metrics, using cards, tables, and filter pills.
                </p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.templatePlaceholder}>
                <p style={{ color: colors.foregroundSecondary, fontStyle: 'italic' }}>
                  Template implementation coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Page */}
        <section id="dashboard-page" className={styles.templateSection}>
          <h2 className={styles.sectionTitle}>Dashboard Page</h2>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <div className={styles.templateDescription}>
                <p style={{ color: colors.foregroundSecondary }}>
                  A dashboard template with summary cards, charts, and quick links.
                </p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.templatePlaceholder}>
                <p style={{ color: colors.foregroundSecondary, fontStyle: 'italic' }}>
                  Template implementation coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Issue Details Page */}
        <section id="issue-details-page" className={styles.templateSection}>
          <h2 className={styles.sectionTitle}>Issue Details Page</h2>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <div className={styles.templateDescription}>
                <p style={{ color: colors.foregroundSecondary }}>
                  A detailed issue page template, including status, severity, and map view.
                </p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.templatePlaceholder}>
                <p style={{ color: colors.foregroundSecondary, fontStyle: 'italic' }}>
                  Template implementation coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}; 
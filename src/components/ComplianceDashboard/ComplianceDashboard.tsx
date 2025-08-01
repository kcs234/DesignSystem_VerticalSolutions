import React from 'react';
import { Typography } from '../Typography';
import { DataCard } from '../DataCard';
import { Table } from '../Table';
import { colors } from '../../tokens/colors';
import { PageHeader } from '../PageHeader';

// Mock data for the dashboard metrics
const dashboardMetrics = [
  {
    variant: 'numberOfTotal' as const,
    title: 'Loans to review',
    value: 75,
    total: 100
  },
  {
    variant: 'number' as const,
    title: 'High impact issues',
    value: '1,234'
  },
  {
    variant: 'currency' as const,
    title: 'Loan volume',
    value: 87.3,
    unit: 'Million USD'
  },
  {
    variant: 'percentage' as const,
    title: 'Risk assessment',
    value: 20,
    unit: '%'
  }
];

export const ComplianceDashboard: React.FC = () => {
  return (
    <>
      <PageHeader
        customerName="Acme Bank"
        customerLogo="https://via.placeholder.com/32x32/4C5353/FFFFFF?text=AB"
        companyLogo="https://via.placeholder.com/83x24/FFFFFF/4C5353?text=UiPath"
        userInitial="M"
        onNotificationClick={() => console.log('Notification clicked')}
        onHelpClick={() => console.log('Help clicked')}
        onUserClick={() => console.log('User clicked')}
      />
      {/* Responsive CSS for stats grid */}
      <style>{`
        .compliance-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        
        @media (max-width: 1200px) {
          .compliance-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .compliance-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '48px 5vw 40px 5vw',
        background: colors.background,
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px'
        }}>
          <Typography variant="h2Bold">Compliance Dashboard</Typography>
        </div>

        {/* Stats Grid */}
        <div className="compliance-stats-grid">
          {dashboardMetrics.map((metric, index) => (
            <DataCard
              key={index}
              variant={metric.variant}
              title={metric.title}
              value={metric.value}
              total={metric.total}
              unit={metric.unit}
            />
          ))}
        </div>

        {/* Table Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <Typography variant="h4Bold">Recent loan applications</Typography>
          <Table />
        </div>
      </div>
    </>
  );
}; 
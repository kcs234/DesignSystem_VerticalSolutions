import React, { useState } from 'react';
import { Typography } from './components/Typography';
import { FilterPills } from './components/FilterPills';
import { DataCard } from './components/DataCard';
import { Buttons } from './components/Buttons';
import { Links } from './components/Links';
import { Table } from './components/Table';
import { StatusPill } from './components/StatusPill';
import { SeverityPill } from './components/SeverityPill';
import { colors } from './tokens/colors';
import { MapView } from './components/MapView';
import { IssueDetails } from './components/IssueDetails';
import { SearchInput } from './components/SearchInput';
import { PageLayoutTemplates } from './components/PageLayoutTemplates';
import { PageHeader } from './components/PageHeader';

const initialPills = [
  { label: 'All branches', selected: true },
  { label: 'West coast' },
  { label: 'Mid-west' },
  { label: 'South-west' },
  { label: 'East coast' },
];

const baseColorTokens = [
  { name: 'background', value: colors.background },
  { name: 'backgroundCard', value: colors.backgroundCard },
  { name: 'foregroundPrimary', value: colors.foregroundPrimary },
  { name: 'foregroundSecondary', value: colors.foregroundSecondary },
];
const statusColorTokens = Object.entries(colors)
  .filter(([name]) => name.startsWith('status'))
  .map(([name, value]) => ({ name, value }));

const typographyTokens = [
  { name: 'h2Bold', fontSize: '32px', weight: 400, lineHeight: '40px', color: colors.foregroundPrimary },
  { name: 'h4Bold', fontSize: '20px', weight: 600, lineHeight: '24px', color: colors.foregroundSecondary },
  { name: 'mBold', fontSize: '14px', weight: 600, lineHeight: '20px', color: colors.foregroundPrimary },
  { name: 'm', fontSize: '14px', weight: 400, lineHeight: '20px', color: colors.foregroundPrimary },
  { name: 's', fontSize: '12px', weight: 400, lineHeight: '16px', color: colors.foregroundPrimary },
  { name: 'xs', fontSize: '10px', weight: 400, lineHeight: '16px', color: colors.foregroundSecondary },
];

const tableHeaderStyle = {
  background: colors.backgroundCard,
  color: colors.foregroundPrimary,
  fontWeight: 600,
  padding: '8px 12px',
  borderBottom: `2px solid ${colors.foregroundSecondary}`,
};
const tableCellStyle = {
  color: colors.foregroundPrimary,
  padding: '8px 12px',
  borderBottom: `1px solid ${colors.foregroundSecondary}`,
  background: colors.backgroundCard,
};

const componentList = [
  { name: 'Color Tokens', import: '', variants: [], id: 'color-tokens', group: 'Components' },
  { name: 'Typography Tokens', import: '', variants: [], id: 'typography-tokens', group: 'Components' },
  { name: 'Page Header', import: 'PageHeader', variants: ['With Logo', 'Without Logo'], id: 'page-header', group: 'Components' },
  { name: 'Buttons', import: 'Buttons', variants: ['Dropdown', 'Icon+Label', 'Filled'], id: 'buttons', group: 'Components' },
  { name: 'Links', import: 'Links', variants: ['With Icon', 'Label Only'], id: 'links', group: 'Components' },
  { name: 'Filter Pills', import: 'FilterPills', variants: ['selected', 'unselected'], id: 'filter-pills', group: 'Components' },
  { name: 'Data Card', import: 'DataCard', variants: ['number', 'numberOfTotal', 'percentage', 'currency'], id: 'data-card', group: 'Components' },
  { name: 'Table', import: 'Table', variants: ['with Severity Pill'], id: 'table', group: 'Components' },
  { name: 'Status Pill', import: 'StatusPill', variants: ['info', 'pending', 'warning', 'success'], id: 'status-pill', group: 'Components' },
  { name: 'Severity Pill', import: 'SeverityPill', variants: ['critical', 'high', 'medium', 'low', 'no count'], id: 'severity-pill', group: 'Components' },
  { name: 'Map View', import: 'MapView', variants: [], id: 'map-view', group: 'Components' },
  { name: 'Issue Details', import: 'IssueDetails', variants: [], id: 'issue-details', group: 'Components' },
  { name: 'Search Input', import: 'SearchInput', variants: [], id: 'search-input', group: 'Components' },
];

const ComponentSheet: React.FC = () => {
  const [pills, setPills] = useState(initialPills);
  const [currentView, setCurrentView] = useState<'components' | 'templates'>('components');

  const handleSelect = (label: string) => {
    setPills((prev) =>
      prev.map((pill) => ({ ...pill, selected: pill.label === label }))
    );
  };

  const handleShowTemplates = () => {
    setCurrentView('templates');
  };

  const handleBackToComponents = () => {
    setCurrentView('components');
  };

  // If we're showing templates, render the PageLayoutTemplates component
  if (currentView === 'templates') {
    return <PageLayoutTemplates onBackToComponents={handleBackToComponents} />;
  }

  return (
    <div
      className="ds-flex-root"
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        width: '100vw',
        background: colors.background,
        boxSizing: 'border-box',
      }}
    >
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .ds-flex-root {
            flex-direction: column !important;
          }
          .ds-nav {
            position: static !important;
            width: 100% !important;
            max-width: 100vw !important;
            border-right: none !important;
            border-bottom: 1px solid ${colors.foregroundSecondary} !important;
            padding: 24px 16px 0 16px !important;
            height: auto !important;
          }
          .ds-main {
            padding: 32px 8vw 32px 8vw !important;
            max-width: 100vw !important;
          }
        }
        @media (max-width: 600px) {
          .ds-main {
            padding: 16px 4vw 16px 4vw !important;
          }
          .ds-nav {
            padding: 16px 8px 0 8px !important;
          }
        }
      `}</style>
      <nav
        className="ds-nav"
        style={{
          width: 320,
          minWidth: 240,
          maxWidth: 400,
          padding: '32px 32px 32px 32px',
          position: 'sticky',
          top: 0,
          alignSelf: 'flex-start',
          height: '100vh',
          background: colors.background,
          borderRight: `1px solid ${colors.foregroundSecondary}`,
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 32, color: colors.foregroundPrimary }}>Design System</h1>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, margin: '16px 0 8px 0', color: colors.foregroundPrimary }}>Components</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {componentList.filter(c => c.group === 'Components').map((comp) => (
              <li key={comp.id} style={{ marginBottom: 8 }}>
                <a href={`#${comp.id}`} className="component-link">{comp.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 600, margin: '16px 0 8px 0', color: colors.foregroundPrimary }}>Page Layout Templates</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>
              <button 
                onClick={handleShowTemplates}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  font: 'inherit',
                  color: colors.foregroundSecondary,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => (e.target as HTMLButtonElement).style.color = colors.foregroundPrimary}
                onMouseOut={(e) => (e.target as HTMLButtonElement).style.color = colors.foregroundSecondary}
                className="component-link"
              >
                View Page Layout Templates
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <main
        className="ds-main"
        style={{
          flex: 1,
          padding: '48px 48px 48px 48px',
          maxWidth: 1200,
          margin: '0 auto',
          boxSizing: 'border-box',
          minHeight: '100vh',
          background: colors.background,
        }}
      >
        <style>{`
          a.component-link {
            color: ${colors.foregroundSecondary};
            text-decoration: underline;
            cursor: pointer;
            transition: color 0.2s;
          }
          a.component-link:hover {
            color: ${colors.foregroundPrimary};
          }
        `}</style>
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16, color: colors.foregroundPrimary }}>Design System Components</h2>
          <table style={{ borderCollapse: 'collapse', minWidth: 400, marginBottom: 8 }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Component</th>
                <th style={tableHeaderStyle}>Import Name</th>
                <th style={tableHeaderStyle}>Variants / Types</th>
              </tr>
            </thead>
            <tbody>
              {componentList.map((comp) => (
                <tr key={comp.name}>
                  <td style={tableCellStyle}>
                    <a href={`#${comp.id}`} className="component-link">{comp.name}</a>
                  </td>
                  <td style={tableCellStyle}><code>{comp.import}</code></td>
                  <td style={tableCellStyle}>
                    {comp.variants.length > 0 ? (
                      <ul style={{ margin: 0, paddingLeft: 16 }}>
                        {comp.variants.map((v) => (
                          <li key={v} style={{ fontSize: 14 }}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      <span style={{ color: '#64748b', fontSize: 14 }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="color-tokens" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Color Tokens</h2>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: colors.foregroundPrimary }}>Base Colors</h3>
          <table style={{ borderCollapse: 'collapse', minWidth: 480, marginBottom: 24 }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Token</th>
                <th style={tableHeaderStyle}>Color</th>
                <th style={tableHeaderStyle}>Hex</th>
              </tr>
            </thead>
            <tbody>
              {baseColorTokens.map((token) => (
                <tr key={token.name}>
                  <td style={tableCellStyle}>{token.name}</td>
                  <td style={tableCellStyle}>
                    <span style={{ display: 'inline-block', width: 32, height: 32, borderRadius: 8, background: token.value, border: '1px solid #e5e7eb' }} />
                  </td>
                  <td style={tableCellStyle}>{token.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: colors.foregroundPrimary }}>Status Pill Colors</h3>
          <table style={{ borderCollapse: 'collapse', minWidth: 480, marginBottom: 16 }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Token</th>
                <th style={tableHeaderStyle}>Color</th>
                <th style={tableHeaderStyle}>Hex</th>
              </tr>
            </thead>
            <tbody>
              {statusColorTokens.map((token) => (
                <tr key={token.name}>
                  <td style={tableCellStyle}>{token.name}</td>
                  <td style={tableCellStyle}>
                    <span style={{ display: 'inline-block', width: 32, height: 32, borderRadius: 8, background: token.value, border: '1px solid #e5e7eb' }} />
                  </td>
                  <td style={tableCellStyle}>{token.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="typography-tokens" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Typography Tokens</h2>
          <table style={{ borderCollapse: 'collapse', minWidth: 600, marginBottom: 16 }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Variant</th>
                <th style={tableHeaderStyle}>Font Size</th>
                <th style={tableHeaderStyle}>Weight</th>
                <th style={tableHeaderStyle}>Line Height</th>
                <th style={tableHeaderStyle}>Color</th>
                <th style={tableHeaderStyle}>Preview</th>
              </tr>
            </thead>
            <tbody>
              {typographyTokens.map((token) => (
                <tr key={token.name}>
                  <td style={tableCellStyle}>{token.name}</td>
                  <td style={tableCellStyle}>{token.fontSize}</td>
                  <td style={tableCellStyle}>{token.weight}</td>
                  <td style={tableCellStyle}>{token.lineHeight}</td>
                  <td style={tableCellStyle}>
                    <span style={{ display: 'inline-block', width: 32, height: 32, borderRadius: 8, background: token.color, border: '1px solid #e5e7eb' }} />
                    <span style={{ marginLeft: 8, color: '#64748b', fontSize: 14 }}>{token.color}</span>
                  </td>
                  <td style={tableCellStyle}>
                    <Typography variant={token.name as any}>{token.name}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="page-header" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Page Header</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: colors.foregroundPrimary }}>With Customer Logo</h3>
              <div style={{ border: `1px solid ${colors.foregroundSecondary}`, borderRadius: 8, overflow: 'hidden' }}>
                <PageHeader
                  customerName="Customer name"
                  customerLogo="https://via.placeholder.com/32x32/4C5353/FFFFFF?text=C"
                  companyLogo="https://via.placeholder.com/83x24/FFFFFF/4C5353?text=Logo"
                  userInitial="M"
                  onNotificationClick={() => console.log('Notification clicked')}
                  onHelpClick={() => console.log('Help clicked')}
                  onUserClick={() => console.log('User clicked')}
                />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: colors.foregroundPrimary }}>Default State (No Logos)</h3>
              <div style={{ border: `1px solid ${colors.foregroundSecondary}`, borderRadius: 8, overflow: 'hidden' }}>
                <PageHeader
                  customerName="Customer name"
                  userInitial="A"
                  onNotificationClick={() => console.log('Notification clicked')}
                  onHelpClick={() => console.log('Help clicked')}
                  onUserClick={() => console.log('User clicked')}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="buttons" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Buttons</h2>
          <Buttons />
        </section>

        <section id="links" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Links</h2>
          <Links />
        </section>

        <section id="filter-pills" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Filter Pills</h2>
          <FilterPills pills={pills} onSelect={handleSelect} />
        </section>

        <section id="data-card" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Data Cards</h2>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <DataCard variant="number" title="Total loans reviewed" value="1,234,567" />
            <DataCard variant="numberOfTotal" title="Loans with Issues" value={23} total={100} />
            <DataCard variant="percentage" title="High severity loans" value={12.5} unit="%" />
            <DataCard variant="currency" title="Total loan flagged" value={123.4} unit="Million USD" />
          </div>
        </section>

        <section id="table" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Table</h2>
          <Table />
        </section>

        <section id="status-pill" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Status Pill</h2>
          <div style={{ display: 'flex', gap: 16 }}>
            <StatusPill label="Due in 3 days" status="info" />
            <StatusPill label="Pending Review" status="pending" />
            <StatusPill label="In progress" status="warning" />
            <StatusPill label="Reviewed" status="success" />
          </div>
        </section>

        <section id="severity-pill" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Severity Pills</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 8, color: colors.foregroundSecondary }}>Default (with count)</div>
              <div style={{ display: 'flex', gap: 32 }}>
                <SeverityPill type="critical" count={118} />
                <SeverityPill type="high" count={112} />
                <SeverityPill type="medium" count={99} />
                <SeverityPill type="low" count={349} />
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 8, color: colors.foregroundSecondary }}>No Count Variant</div>
              <div style={{ display: 'flex', gap: 32 }}>
                <SeverityPill type="critical" showCount={false} />
                <SeverityPill type="high" showCount={false} />
                <SeverityPill type="medium" showCount={false} />
                <SeverityPill type="low" showCount={false} />
              </div>
            </div>
          </div>
        </section>

        <section id="map-view" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Map View</h2>
          <MapView />
        </section>

        {/* --- Issue Details Component Section (not a page template) --- */}
        <section id="issue-details" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Issue Details</h2>
          <IssueDetails
            title="Loan 29910"
            statusLabel="Due in 3 days"
            company="TechStart Inc."
            loanType="Commercial RE"
            loanAmount="$10,570,000"
            reviewDeadline="July, 6 2025"
            loanContact="Julia Something"
            status="Started"
          />
        </section>
        {/* --- End Issue Details Component Section --- */}

        <section id="search-input" style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, color: colors.foregroundPrimary }}>Search Input</h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <SearchInput placeholder="Search..." />
            <SearchInput placeholder="Filter by name" />
            <SearchInput placeholder="Enter loan ID" />
          </div>
        </section>


      </main>
    </div>
  );
};

export default ComponentSheet; 
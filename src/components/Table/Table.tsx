import React, { useState, useMemo } from 'react';
import styles from './Table.module.css';
import { StatusPill } from '../StatusPill';
import { SeverityPill } from '../SeverityPill';
import { SearchInput } from '../SearchInput';
import { DropdownButton, IconLabelButton, FilterIcon } from '../Buttons';

// Sample data
const initialRows = [
  {
    rule: 'Tri merge report integrity validation',
    impact: 'Critical',
    status: 'Pending Review',
    exceptions: 1,
    date: '7/03/25',
    sources: 1,
  },
  {
    rule: 'Underwriter credit score selection validation',
    impact: 'High',
    status: 'Pending Review',
    exceptions: 0,
    date: '7/03/25',
    sources: 3,
  },
  {
    rule: 'Conflict of interest check',
    impact: 'High',
    status: 'Pending Review',
    exceptions: 0,
    date: '7/03/25',
    sources: 2,
  },
  {
    rule: 'Evaluation of Borrower Financial Stability',
    impact: 'Low',
    status: 'Pending Review',
    exceptions: 0,
    date: '7/03/25',
    sources: 2,
  },
  {
    rule: 'Assessment of Loan Terms and Conditions',
    impact: 'Low',
    status: 'Pending Review',
    exceptions: 0,
    date: '7/03/25',
    sources: 1,
  },
  {
    rule: 'Inspection of Property Appraisal Reports',
    impact: 'High',
    status: 'Pending Review',
    exceptions: 0,
    date: '7/03/25',
    sources: 3,
  },
  {
    rule: 'Analysis of Environmental Impact Assessments',
    impact: 'Medium',
    status: 'Reviewed',
    exceptions: 0,
    date: '7/03/25',
    sources: 2,
  },
  {
    rule: 'Verification of Loan Compliance and Documentation Accuracy',
    impact: 'Low',
    status: 'Done',
    exceptions: 0,
    date: '7/03/25',
    sources: 1,
  },
];

const columns = [
  { key: 'rule', label: 'Rule', sortable: true },
  { key: 'severity', label: 'Severity', sortable: false },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'exceptions', label: 'Exceptions', sortable: true },
  { key: 'date', label: 'Date run', sortable: true },
  { key: 'sources', label: 'Data sources', sortable: true },
  { key: 'action', label: 'Action', sortable: false },
];

const DropdownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function getRandomSeverity(index: number) {
  const severities = ['critical', 'high', 'medium', 'low'];
  return severities[index % severities.length] as 'critical' | 'high' | 'medium' | 'low';
}

const Table: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState('Date');
  const [filterStatus, setFilterStatus] = useState('All');

  const statusMap = {
    'Pending Review': { label: 'Pending Review', status: 'pending' as const },
    'Reviewed': { label: 'Reviewed', status: 'warning' as const },
    'Done': { label: 'Done', status: 'success' as const },
  };

  const sortedRows = useMemo(() => {
    let filtered = initialRows.filter(row => 
      row.rule.toLowerCase().includes(search.toLowerCase()) ||
      row.status.toLowerCase().includes(search.toLowerCase()) ||
      row.impact.toLowerCase().includes(search.toLowerCase())
    );

    if (sortKey) {
      filtered.sort((a, b) => {
        let aVal = a[sortKey as keyof typeof a];
        let bVal = b[sortKey as keyof typeof b];
        
        if (typeof aVal === 'string') aVal = aVal.toLowerCase();
        if (typeof bVal === 'string') bVal = bVal.toLowerCase();
        
        if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    }

    return filtered;
  }, [search, sortKey, sortDir]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  return (
    <div className={styles.tableWrapper}>
      {/* Enhanced Control Bar */}
      <div className={styles.controlBar}>
        <SearchInput
          placeholder="Search"
          value={search}
          onChange={setSearch}
        />
        
        <DropdownButton
          label="Sort by"
          value={sortBy}
          onClick={() => console.log('Sort dropdown clicked')}
        />
        
        <div className={styles.divider} />
        
        <IconLabelButton
          label=""
          icon={<FilterIcon />}
          onClick={() => console.log('Filter clicked')}
        />
        
        <DropdownButton
          label="QC Status"
          value={filterStatus}
          onClick={() => console.log('Status filter clicked')}
        />
        
        <IconLabelButton
          label="All filters"
          onClick={() => console.log('All filters clicked')}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className={styles.th}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                style={{ cursor: col.sortable ? 'pointer' : 'default' }}
              >
                {col.label}
                {col.sortable && (
                  <span className={styles.sortIcon}>
                    {sortKey === col.key ? (sortDir === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, i) => (
            <tr key={i} className={styles.tr}>
              <td className={styles.td}>{row.rule}</td>
              <td className={styles.td}>
                <SeverityPill type={getRandomSeverity(i)} />
              </td>
              <td className={styles.td}>
                <StatusPill {...statusMap[row.status]} />
              </td>
              <td className={styles.td}>{row.exceptions}</td>
              <td className={styles.td}>{row.date}</td>
              <td className={styles.td}>{row.sources}</td>
              <td className={styles.td}>
                <button className={styles.dropdownButton}>
                  <span>Rerun</span>
                  <DropdownIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table }; 
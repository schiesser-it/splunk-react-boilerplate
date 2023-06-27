import React, { useState } from 'react';
import TimeRangeDropdown from '@splunk/react-time-range/Dropdown';
import Dashboard from './components/Dashboard';

const initialDateRange = ['-4h@m', 'now'];

export default function App() {
  const [dateRange, setDateRange] = useState(initialDateRange);

  const handleChange = (e, { earliest, latest }) => {
    setDateRange([earliest, latest]);
  };

  return (
    <div data-testid="root">
      <TimeRangeDropdown
        presets={[
          { label: 'Today', earliest: '@d', latest: 'now' },
          { label: 'Last 15 minutes', earliest: '-15m', latest: 'now' },
          { label: 'Last 60 minutes', earliest: '-60m@m', latest: 'now' },
          { label: 'Last 4 hours', earliest: '-4h@m', latest: 'now' },
        ]}
        onChange={handleChange}
        earliest={dateRange[0]}
        latest={dateRange[1]}
        labelMaxChars={Infinity}
      />
      <Dashboard dateRange={dateRange} />
    </div>
  );
}

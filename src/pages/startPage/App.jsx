import React, { useState } from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import DateRange from './components/DateRange';
import Dashboard from './components/Dashboard';

const initialDateRange = [dayjs().subtract(6, 'month'), dayjs()];

export default function App() {
  const [dateRange, setDateRange] = useState(initialDateRange);

  const handleDateRangeChange = (value) => {
    setDateRange(value);
  };

  return (
    <div data-testid="root">
      <Box>
        <DateRange initialDateRange={initialDateRange} onDateRangeChange={handleDateRangeChange} />
        <Dashboard dateRange={dateRange} />
      </Box>
    </div>
  );
}

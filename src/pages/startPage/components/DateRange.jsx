import { Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import React, { useState } from 'react';

export default function DateRange({ initialDateRange, onDateRangeChange }) {
  const [value, setValue] = useState(initialDateRange);

  const handleDateChange = (newValue, index) => {
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
    onDateRangeChange(updatedValue);
  };

  return (
    <Box data-testid="date-picker" sx={{ my: 4, mx: 2, display: 'flex', gap: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start date"
          disableFuture
          mask="__.__.____"
          value={value[0]}
          onChange={(newValue) => handleDateChange(newValue, 0)}
        />
        <DatePicker
          label="End date"
          disableFuture
          mask="__.__.____"
          value={value[1]}
          onChange={(newValue) => handleDateChange(newValue, 1)}
        />
      </LocalizationProvider>
    </Box>
  );
}

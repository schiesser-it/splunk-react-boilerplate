import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import dayjs from 'dayjs';
import DateRange from '../DateRange';

test('renders with default name', async () => {
  const initialDateRange = [dayjs().subtract(6, 'month'), dayjs()];
  const handleDateRangeChange = () => {};
  const { getByTestId } = render(
    <DateRange initialDateRange={initialDateRange} onDateRangeChange={handleDateRangeChange} />,
  );
  expect(getByTestId('date-picker')).toBeInTheDocument();
});

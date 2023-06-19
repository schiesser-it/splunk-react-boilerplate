import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders with default name', async () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('root')).toBeInTheDocument();
});

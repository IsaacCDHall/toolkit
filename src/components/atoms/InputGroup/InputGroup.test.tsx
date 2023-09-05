import { render, screen } from '@testing-library/react';
import React from 'react';

import InputGroup from './InputGroup';

test('renders correctly', () => {
  render(<InputGroup />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

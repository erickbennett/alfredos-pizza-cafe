import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
const { getByAltText, getByText, debug, getByTestId } = screen;
const testUrl = 'http://localhost';

import Home from '../components/Home';

test('<Home>', () => {
  render(<Home />);
  expect(getByText(`Welcome to Alfredo's Pizza Cafe`).tagName).toBe('H1');
});

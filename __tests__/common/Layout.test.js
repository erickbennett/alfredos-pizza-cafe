import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
const { getByAltText, getByText, debug, getByTestId } = screen;
const testUrl = 'http://localhost';

import Layout from '../../components/common/Layout';

test('<Layout>', () => {
  render(<Layout />);
  expect(getByTestId('page-layout')).toBeTruthy();
});

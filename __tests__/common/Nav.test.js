import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
const { getByAltText, getByText, debug, getByTestId } = screen;
const testUrl = 'http://localhost';

import Nav from '../../components/common/Nav';

test('<Nav>', () => {
  render(<Nav />);
  expect(getByText('Ragu N Such').tagName).toBe('FOOTER');
});

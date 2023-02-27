import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Table from '../components/Table';

test('Texto table', () => {
  renderWithRouterAndRedux(<Table />);
  const table = screen.getByText(/table/i);
  expect(table).toBeInTheDocument();
});

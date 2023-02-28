import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Header from '../components/Header';

test('Teste o câmbio', () => {
  renderWithRouterAndRedux(<Header />);
  const cambio = screen.getByText('BRL');
  expect(cambio).toBeInTheDocument();
});

test('Teste se existe um campo para email', () => {
  renderWithRouterAndRedux(<Header />);
  const emailinfo = screen.getByTestId('email-field');
  expect(emailinfo).toBeInTheDocument();
});

test('Teste se possui um campo com o valor total de despesas', () => {
  renderWithRouterAndRedux(<Header />);
  const expenseinfo = screen.getByText('0.00');
  expect(expenseinfo).toBeInTheDocument();
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Table from '../components/Table';
import App from '../App';

test('Renderização das informações', () => {
  renderWithRouterAndRedux(<Table />);
  expect(screen.getByTestId('th-dscp').toBeInTheDocument);
  expect(screen.getByTestId('th-tag').toBeInTheDocument);
  expect(screen.getByTestId('th-method').toBeInTheDocument);
  expect(screen.getByTestId('th-value').toBeInTheDocument);
  expect(screen.getByTestId('th-name').toBeInTheDocument);
  expect(screen.getByTestId('th-currency').toBeInTheDocument);
  expect(screen.getByTestId('th-price').toBeInTheDocument);
  expect(screen.getByTestId('th-cambio').toBeInTheDocument);
  expect(screen.getByTestId('edit-btn').toBeInTheDocument);
  expect(screen.getByTestId('delete-btn').toBeInTheDocument);
});

test('Deletar um item da tabela', async () => {
  renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

  const value = screen.getByRole('spinbutton');
  userEvent.type(value, '18');
  waitFor(() => expect(value).toHaveValue('18'));

  const buttonDespesa = screen.getByRole('button', { name: /adicionar despesa/i });
  userEvent.click(buttonDespesa);

  const deleteButton = await screen.findByTestId('delete-btn');
  userEvent.click(deleteButton);
});

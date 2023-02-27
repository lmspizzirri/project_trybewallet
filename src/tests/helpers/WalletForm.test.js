import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './renderWith';
import WalletForm from '../../components/WalletForm';

test('Input para inserir o valor', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const valueinput = screen.getByPlaceholderText(/Valor/i);
  expect(valueinput).toBeInTheDocument();
});

test('Input para inserir a descrição', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const descriptioninput = screen.getByPlaceholderText(/Descrição/i);
  expect(descriptioninput).toBeInTheDocument();
});

test('Input para inserir o câmbio', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const inputCurrency = screen.getByTestId('currency-input');
  expect(inputCurrency).toBeInTheDocument();
});

test('Input para inserir o metodo de pagamento', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const inputMethod = screen.getByTestId('method-input');
  expect(inputMethod).toBeInTheDocument();
});

test('Input para inserir o câmbio', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const inputTag = screen.getByTestId('tag-input');
  expect(inputTag).toBeInTheDocument();
});

test('A página deve ter um botão', () => {
  renderWithRouterAndRedux(<WalletForm />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

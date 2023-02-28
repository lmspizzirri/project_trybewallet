import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

test('A página deve renderizar um texto Login', () => {
  renderWithRouterAndRedux(<App />);
  const login = screen.getByText('Login');
  expect(login).toBeInTheDocument();
});

test('A página deve ter um botão com o texto Entrar', () => {
  renderWithRouterAndRedux(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('A página deve ter um input do tipo texto', () => {
  renderWithRouterAndRedux(<App />);
  const textinput = screen.getByPlaceholderText('Email');
  expect(textinput).toBeInTheDocument();
});

test('A Página deve ter um input do tipo password', () => {
  renderWithRouterAndRedux(<App />);
  const passwordinput = screen.getByPlaceholderText('Senha');
  expect(passwordinput).toBeInTheDocument();
});

test('A rota deve ser o "path=/"', () => {
  const { history } = renderWithRouterAndRedux(<App />);
  expect(history.location.pathname).toBe('/');
});

test('Botão precisa estar desabilitado', () => {
  renderWithRouterAndRedux(<App />);
  const button = screen.getByRole('button', { name: 'Entrar' });
  expect(button).toBeDisabled();
});

test('Botão precisa habilitar após os campos serem preenchidos', () => {
  renderWithRouterAndRedux(<App />);
  const textinput = screen.getByPlaceholderText('Email');
  userEvent.type(textinput, 'trybe@test.com.br');
  const passwordinput = screen.getByPlaceholderText('Senha');
  userEvent.type(passwordinput, 'abcdef');
  const button = screen.getByRole('button', { name: 'Entrar' });
  expect(button).toBeEnabled();
});

test('Botão precisa habilitar após os campos serem preenchidos', () => {
  renderWithRouterAndRedux(<App />);
  const textinput = screen.getByPlaceholderText('Email');
  userEvent.type(textinput, 'trybe@test.com.br');
  const passwordinput = screen.getByPlaceholderText('Senha');
  userEvent.type(passwordinput, 'abcdef');
  const button = screen.getByRole('button', { name: 'Entrar' });
  userEvent.click(button);
  expect(pathname).toBe('/carteira');
});

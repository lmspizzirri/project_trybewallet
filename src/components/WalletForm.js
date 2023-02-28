import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import apiCall from '../services/apiCall';
import addCoin, { addExchanges, editorCard } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: Number(0),
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const coin = await apiCall();
    dispatch(addCoin(coin));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClickEditor = async () => {
    const { dispatch, idToEdit } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const exchangeRates = await apiCall();
    dispatch(editorCard({
      id: idToEdit, value, description, currency, method, tag, exchangeRates }));
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const exchangeRates = await apiCall();
    dispatch(addExchanges({
      id, value, description, currency, method, tag, exchangeRates }));

    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <input
          data-testid="value-input"
          placeholder="Valor"
          value={ value }
          name="value"
          type="number"
          onChange={ this.handleChange }
        />
        <input
          data-testid="description-input"
          placeholder="Descrição"
          value={ description }
          name="description"
          type="text"
          onChange={ this.handleChange }
        />
        <select
          data-testid="currency-input"
          value={ currency }
          onChange={ this.handleChange }
          name="currency"
        >
          { currencies.map((element) => <option key={ element }>{ element }</option>) }
        </select>
        <select
          data-testid="method-input"
          value={ method }
          onChange={ this.handleChange }
          name="method"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          value={ tag }
          onChange={ this.handleChange }
          name="tag"
        >
          <option> Alimentação </option>
          <option> Lazer </option>
          <option> Trabalho </option>
          <option> Transporte </option>
          <option> Saúde </option>
        </select>
        <button
          type="button"
          onClick={ editor ? this.handleClickEditor : this.handleClick }
        >
          { editor ? 'Editar' : 'Adicionar despesa'}
        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

export default connect(mapStateToProps)(WalletForm);

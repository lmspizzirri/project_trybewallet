import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import apiCall from '../services/apiCall';
import addCoin from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const coin = await apiCall();
    dispatch(addCoin(coin));
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <input data-testid="value-input" placeholder="Valor" />
        <input data-testid="description-input" placeholder="Descrição" />
        <select data-testid="currency-input">
          { currencies.map((element) => <option key={ element }>{ element }</option>) }
        </select>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option> Alimentação </option>
          <option> Lazer </option>
          <option> Trabalho </option>
          <option> Transporte </option>
          <option> Saúde </option>
        </select>
        <button>Adicionar depesa</button>
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
});

export default connect(mapStateToProps)(WalletForm);

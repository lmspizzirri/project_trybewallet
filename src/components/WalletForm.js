import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import apiCall from '../services/apiCall';
import addCoin, { addExchanges } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: '0',
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

  handleClick = async () => {
    const { dispatch } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const exchangeInfo = await apiCall();
    this.setState({ id: id + 1 });
    dispatch(addExchanges({
      id, value, description, currency, method, tag, exchangeInfo }));

    this.setState({
      id: '0',
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
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
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
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

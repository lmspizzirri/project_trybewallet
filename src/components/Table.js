import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCard, editCard } from '../redux/actions';

class Table extends Component {
  handleClick = (param) => {
    const { dispatch } = this.props;
    dispatch(deleteCard(param));
  };

  handleClickEdit = (id) => {
    const { dispatch } = this.props;
    dispatch(editCard(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(((element) => (
            <tr key={ element.id }>
              <td data-testid="th-dscp">{ element.description }</td>
              <td data-testid="th-tag">{ element.tag}</td>
              <td data-testid="th-method">{ element.method}</td>
              <td data-testid="th-value">{ Number(element.value).toFixed(2)}</td>
              <td
                data-testid="th-name"
              >
                { element.exchangeRates[element.currency].name}
              </td>
              <td data-testid="th-currency">
                {
                  Number(element.exchangeRates[element.currency].ask).toFixed(2)
                }
              </td>
              <td data-testid="th-price">
                { Number(element.exchangeRates[element.currency].ask * element.value)}
              </td>
              <td data-testid="th-cambio">Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => this.handleClickEdit(element.id) }
                >
                  Editar despesa
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(element.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps)(Table);

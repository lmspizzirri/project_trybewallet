import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCard } from '../redux/actions';

class Table extends Component {
  handleClick = (param) => {
    const { dispatch } = this.props;
    dispatch(deleteCard(param));
  };

  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        {expenses.map(((element) => (
          <tr key={ element.id }>
            <th data-testid="th-dscp">{ element.description }</th>
            <th data-testid="th-tag">{ element.tag}</th>
            <th data-testid="th-method">{ element.method}</th>
            <th data-testid="th-value">{ Number(element.value).toFixed(2)}</th>
            <th data-testid="th-name">{ element.exchangeRates[element.currency].name}</th>
            <th data-testid="th-currency">
              {
                Number(element.exchangeRates[element.currency].ask).toFixed(2)
              }
            </th>
            <th data-testid="th-price">
              { Number(element.exchangeRates[element.currency].ask * element.value)}
            </th>
            <th data-testid="th-cambio">Real</th>
            <th>
              <button
                type="button"
                data-testid="edit-btn"
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
            </th>
          </tr>
        )))}
      </tbody>
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

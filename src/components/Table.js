import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        {expenses.map(((element) => (
          <tr key={ element.id }>
            <th>{ element.description }</th>
            <th>{ element.tag}</th>
            <th>{ element.method}</th>
            <th>{ Number(element.value).toFixed(2)}</th>
            <th>{ element.exchangeRates[element.currency].name}</th>
            <th>{ Number(element.exchangeRates[element.currency].ask).toFixed(2)}</th>
            <th>
              { Number(element.exchangeRates[element.currency].ask * element.value)}
            </th>
            <th>Real</th>
            <th>Editar/Excluir</th>
          </tr>
        )))}
      </div>
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

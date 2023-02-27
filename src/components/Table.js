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
            <td>{ element.description }</td>
            <td>{ element.tag}</td>
            <td>{ element.metdod}</td>
            <td>{ Number(element.value).toFixed(2)}</td>
            <td>{ element.exchangeInfo[element.currency].name}</td>
            <td>{ Number(element.exchangeInfo[element.currency].ask).toFixed(2)}</td>
            <td>{ Number(element.exchangeInfo[element.currency].ask * element.value)}</td>
            <td>Real</td>
            <td>Editar/Excluir</td>
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

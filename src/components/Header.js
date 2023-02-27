import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailState, expenses } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ emailState }</h2>
          <h2
            data-testid="total-field"
          >
            { expenses.reduce((sum, { value, currency, exchangeInfo }) => {
              sum += Number(value) * Number(exchangeInfo[currency].ask);
              return Number(sum);
            }, 0).toFixed(2) }
          </h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailState: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);

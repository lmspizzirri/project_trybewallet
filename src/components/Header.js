import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailState } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ emailState }</h2>
          <h2 data-testid="total-field">0</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

Header.propTypes = {
  emailState: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);

import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const passwordLength = 5;
    const { email, password } = this.state;
    const { history } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !(emailPattern.test(email) && password.length > passwordLength) }
          onClick={ () => {
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

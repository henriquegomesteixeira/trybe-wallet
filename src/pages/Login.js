import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import { saveEmail } from '../redux/actions/index';
import '../styles/Login.css';
import logo from '../img/logo Trybe Wallet.png';

class Login extends React.Component {
  state = {
    isButtonDisabled: true,
    email: '',
    password: '',
    redirect: false,
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });

    this.setState((prev) => {
      const { email, password } = prev;
      const regex = /\S+@\S+\.\S+/;
      const n = 6;
      if (regex.test(email) && password.length >= n) {
        return { isButtonDisabled: false };
      }
      return { isButtonDisabled: true };
    });
  };

  handleLoginButton = () => {
    const { dispatch } = this.props;
    const { email } = this.state;
    dispatch(saveEmail(email));

    this.setState({
      redirect: true,
    });
  };

  render() {
    const { isButtonDisabled, redirect } = this.state;
    return (
      redirect ? <Redirect to="/carteira" /> : (
        <div className="login-main">
          <form>
            <div className="div-img">
              <img src={ logo } alt="Logo" />
            </div>
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleInputChange }
              placeholder="E-mail"
            />
            <input
              type="password"
              name="password"
              data-testid="password-input"
              minLength={ 6 }
              onChange={ this.handleInputChange }
              placeholder="Senha"
            />
            <button
              type="button"
              disabled={ isButtonDisabled }
              onClick={ this.handleLoginButton }
            >
              Entrar
            </button>
          </form>
        </div>
      )
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);

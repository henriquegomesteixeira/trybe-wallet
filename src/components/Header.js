import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../img/logo Trybe Wallet.png';
import moeda from '../img/Moedas.png';
import iconeEmail from '../img/Vector.png';

class Header extends Component {
  somaCusto = () => {
    const { custoState } = this.props;
    const expenses = custoState
      .map((expense) => expense.value * expense.exchangeRates[expense.currency].ask);

    const totalSoma = expenses.reduce((acc, curr) => acc + curr, 0);
    return totalSoma.toFixed(2);
  };

  render() {
    const { emailState } = this.props;
    return (
      <div className="header">
        <img src={ logo } alt="Logo" />
        <label>
          <img src={ moeda } alt="icone de moeda" />
          <p>
            <strong>
              Despesa Total:
            </strong>
            {' '}
            R$
            {' '}
            <span data-testid="total-field">{this.somaCusto()}</span>
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </label>
        <label>
          <img src={ iconeEmail } alt="icone de email" />
          <p data-testid="email-field" className="header-email">
            {emailState}
          </p>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  custoState: state.wallet.expenses,
});

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
  custoState: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
    }),
    currency: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);

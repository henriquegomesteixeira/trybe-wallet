import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchExpenses, editar } from '../redux/actions/index';

const tagg = 'Alimentação';

class WalletForm extends Component {
  state = {
    id: -1,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: tagg,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  buttonClick = () => {
    this.setState((prev) => ({
      id: prev.id + 1,
    }), () => {
      const { id, value, description, currency, method, tag } = this.state;

      const expenses = {
        id,
        value,
        description,
        currency,
        method,
        tag,
      };

      const { dispatch } = this.props;
      dispatch(fetchExpenses(expenses));

      this.setState({
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: tagg,
      });
    });
  };

  buttonEditar = () => {
    const { id, value, description, currency, method, tag } = this.state;
    const { idToEdit } = this.props;

    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };

    const { dispatch } = this.props;
    dispatch(editar(idToEdit, expenses));

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: tagg,
    });
  };

  render() {
    const { currencies, editor } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="form-wallet">
        <div className="form-div-1">
          <label>
            <strong>
              Descrição da despesa
            </strong>
            <input
              type="text"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.inputChange }
              maxLength={ 10 }
            />
          </label>
          <label>
            <strong>
              Categoria da despesa
            </strong>
            <select
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.inputChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <div className="form-div-2">
          <label>
            <strong>
              Valor
            </strong>
            <input
              type="number"
              name="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.inputChange }
            />
          </label>
          <label>
            <strong>
              Método de Pagamento
            </strong>
            <select
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.inputChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label>
            <strong>
              Moeda
            </strong>
            <select
              data-testid="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.inputChange }
            >
              {
                currencies.map((currencyName, index) => (
                  <option key={ index } value={ currencyName }>{currencyName}</option>
                ))
              }
            </select>
          </label>
        </div>
        {
          editor ? (
            <div className="form-button">
              <button type="button" onClick={ this.buttonEditar }>Editar despesa</button>
            </div>
          ) : (
            <div className="form-button">
              <button
                type="button"
                onClick={ this.buttonClick }
              >
                Adicionar despesa
              </button>
            </div>
          )
        }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletForm);

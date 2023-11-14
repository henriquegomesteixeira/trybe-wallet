import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { excluirTable, saveId } from '../redux/actions';

class Table extends Component {
  buttonClick = (id) => {
    const { dispatch } = this.props;
    dispatch(excluirTable(id));
  };

  buttonEditar = (id) => {
    const { dispatch } = this.props;
    dispatch(saveId(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead className="thead">
          <tr className="tr">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th className="moeda">Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th className="editar-excluir">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{(Number(expense.value)).toFixed(2)}</td>
                <td className="moeda">{expense.exchangeRates[expense.currency].name}</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {(expense.value * expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    id="editar"
                    onClick={ () => this.buttonEditar(expense.id) }
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    id="excluir"
                    onClick={ () => this.buttonClick(expense.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
    }),
    currency: PropTypes.string,
  })).isRequired,
};
export default connect(mapStateToProps)(Table);

import { api } from '../../services/currencyAPI';

export const saveEmail = (email) => ({
  type: 'ADD_EMAIL',
  email,
});

export const getCurrencies = (currencies) => ({
  type: 'ADD_API',
  currencies,
});

export const fetchCurrencies = () => async (dispatch) => {
  const data = await api();
  const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
  dispatch(getCurrencies(currencies));
};

export const addExpenses = (expenses) => ({
  type: 'ADD_EXPENSES',
  expenses,
});

export const fetchExpenses = (expenses) => async (dispatch) => {
  const data = await api();

  expenses.exchangeRates = data;
  dispatch(addExpenses(expenses));
};

export const excluirTable = (id) => ({
  type: 'EXCLUIR_TABLE',
  id,
});

export const saveId = (id) => ({
  type: 'EDITAR_ID',
  id,
});

export const editar = (id, expenses) => ({
  type: 'EDITAR_TABLE',
  id,
  expenses,
});

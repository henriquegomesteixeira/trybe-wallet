const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_API':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'ADD_EXPENSES':
    return {
      ...state, expenses: [...state.expenses, action.expenses],
    };
  case 'EXCLUIR_TABLE':
    return {
      ...state,
      expenses: state.expenses.filter((ex) => ex.id !== action.id),
    };
  case 'EDITAR_TABLE':
    return {
      ...state,
      expenses: state.expenses.map(
        (ex) => (ex.id === action.id ? {
          ...ex,
          value: action.expenses.value,
          description: action.expenses.description,
          currency: action.expenses.currency,
          method: action.expenses.method,
          tag: action.expenses.tag,
        } : ex),
      ),
      editor: false,
    };
  case 'EDITAR_ID':
    return {
      ...state,
      idToEdit: action.id,
      editor: true,
    };
  default:
    return state;
  }
};

export default walletReducer;

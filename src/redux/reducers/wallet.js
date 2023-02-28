import { DELETE_CARD, SAVE_COIN, SAVE_EXPENSE, EDIT_CARD, EDITOR_CARD } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const coinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_COIN:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_CARD:
    return {
      ...state,
      expenses: state.expenses.filter((element) => Number(element.id) !== action.payload),
    };
  case EDIT_CARD:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case EDITOR_CARD:
    return {
      ...state,
      editor: false,
      expenses: state.expenses.map((element) => (element.id === action.payload.id
        ? { ...element, ...action.payload } : element)),
    };
  default:
    return state;
  }
};

export default coinReducer;

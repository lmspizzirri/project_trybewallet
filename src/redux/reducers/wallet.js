import { SAVE_COIN } from '../actions';

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
  default:
    return state;
  }
};

export default coinReducer;

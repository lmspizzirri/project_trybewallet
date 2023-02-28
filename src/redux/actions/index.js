export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_COIN = 'SAVE_COIN';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const EDITOR_CARD = 'EDITOR_CARD';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

const addCoin = (currencies) => ({
  type: SAVE_COIN,
  payload: currencies,
});

export const addExchanges = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export const deleteCard = (payload) => ({
  type: DELETE_CARD,
  payload,
});

export const editCard = (payload) => ({
  type: EDIT_CARD,
  payload,
});

export const editorCard = (payload) => ({
  type: EDITOR_CARD,
  payload,
});

export default addCoin;

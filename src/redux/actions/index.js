export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_COIN = 'SAVE_COIN';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

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

export default addCoin;

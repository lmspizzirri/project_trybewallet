export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_COIN = 'SAVE_COIN';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

const addCoin = (currencies) => ({
  type: SAVE_COIN,
  payload: currencies,
});

export default addCoin;

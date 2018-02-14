import axios from 'axios';
import _ from 'underscore';

// import productData from '../mocks/product';
// import variantData from '../mocks/variant';
// import customerData from '../mocks/customer';

import {
  FETCH_PRODUCT,
  FETCH_CURRENCY,
  SET_CUSTOMER,
  SET_LOADING,
  SET_TRANSACTION,
  SWITCH_CURRENCY,
  SWITCH_VARIANT,
  UPDATE_PROGRESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  GO_TO_PAGE
} from './types';

export const setLoading = bool => {
  return { type: SET_LOADING, payload: bool };
};

export const setTransaction = transactionData => {
  return { type: SET_TRANSACTION, payload: transactionData };
};

export const incrementPage = () => {
  return { type: INCREMENT_PAGE };
};

export const decrementPage = () => {
  return { type: DECREMENT_PAGE };
};

export const goToPage = page => {
  return { type: GO_TO_PAGE, payload: page };
};

export const fetchCurrency = currencyId => async dispatch => {
  dispatch(setLoading(true));
  const res = await axios.get(`/api/currency/${currencyId}`);
  const payload = res.data[0];
  dispatch({ type: FETCH_CURRENCY, payload });
  dispatch(setLoading(false));
};

export const fetchProduct = productId => async dispatch => {
  const res = await axios.get(`/api/product/${productId}`);
  // const res = productData;
  const payload = _.omit(res.data.product, 'body_html');
  dispatch({ type: FETCH_PRODUCT, payload });
  const firstVariant = payload.variants[0];
  dispatch({ type: SWITCH_VARIANT, payload: firstVariant });
};

export const setCustomer = customer => async dispatch => {
  dispatch({ type: SET_CUSTOMER, payload: customer });
};

export const switchCurrency = currency => async dispatch => {
  dispatch({ type: SWITCH_CURRENCY, payload: currency });
};

export const switchVariant = variant => async dispatch => {
  dispatch({ type: SWITCH_VARIANT, payload: variant });
};

export const updateProgress = progress => async dispatch => {
  dispatch({ type: UPDATE_PROGRESS, payload: progress });
};

export const submitForm = (customer, transaction) => async dispatch => {
  const obj = {
    customer,
    transaction
  };

  dispatch(setLoading(true));
  await axios.post(`/api/transactions/new`, obj);
  dispatch(setLoading(false));
};

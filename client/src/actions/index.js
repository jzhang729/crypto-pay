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
  UPDATE_PROGRESS
} from './types';

export const setLoading = bool => {
  return { type: SET_LOADING, payload: bool };
};

export const setTransaction = transactionData => {
  return { type: SET_TRANSACTION, payload: transactionData };
};

export const fetchCurrency = (currencyId = 'raiblocks') => async dispatch => {
  dispatch(setLoading(true));
  const res = await axios.get(`/api/currency/${currencyId}`);
  const payload = res.data[0];
  dispatch(setLoading(false));
  dispatch({ type: FETCH_CURRENCY, payload });
};

export const fetchProduct = productId => async dispatch => {
  const res = await axios.get(`/api/product/${productId}`);
  // const res = productData;
  const payload = _.omit(res.data.product, 'body_html');
  dispatch({ type: FETCH_PRODUCT, payload });
};

export const setCustomer = customer => async dispatch => {
  const res = await axios.post(`/api/customers/new`, customer);
  const payload = res.data;
  // const payload = customerData.customer;
  dispatch({ type: SET_CUSTOMER, payload });
};

export const switchCurrency = currency => async dispatch => {
  dispatch({ type: SWITCH_CURRENCY, payload: currency });
};

export const switchVariant = variantId => async dispatch => {
  const res = await axios.get(`/api/variants/${variantId}`);
  const payload = res.data.variant;
  // const payload = variantData.variant;
  dispatch({ type: SWITCH_VARIANT, payload });
};

export const updateProgress = progress => async dispatch => {
  dispatch({ type: UPDATE_PROGRESS, payload: progress });
};

export const submitForm = transaction => async dispatch => {
  dispatch(setLoading(true));
  const res = await axios.post(`/api/transactions/new`, transaction);
  dispatch(setLoading(false));
  console.log('response', res);
};

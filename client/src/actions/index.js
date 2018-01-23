import _ from 'underscore';
import axios from 'axios';
import {
  FETCH_PRODUCT,
  SWITCH_CURRENCY,
  SWITCH_VARIANT,
  UPDATE_PROGRESS
} from './types';

export const updateProgress = progress => async dispatch => {
  dispatch({ type: UPDATE_PROGRESS, payload: progress });
};

export const switchCurrency = currency => async dispatch => {
  dispatch({ type: SWITCH_CURRENCY, payload: currency });
};

export const switchVariant = variantId => async dispatch => {
  const res = await axios.get(`/api/variants/${variantId}`);
  dispatch({ type: SWITCH_VARIANT, payload: res.data.variant });
};

export const fetchProduct = productId => async dispatch => {
  const res = await axios.get(`/api/product/${productId}`);
  const payload = _.omit(res.data.product, 'body_html');

  dispatch({ type: FETCH_PRODUCT, payload });
};

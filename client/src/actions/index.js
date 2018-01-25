import productData from '../mocks/product';
import variantData from '../mocks/variant';

// import _ from 'underscore';
// import axios from 'axios';
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
  // const res = await axios.get(`/api/variants/${variantId}`);
  // const payload = res.data.variant;
  const payload = variantData.variant;
  dispatch({ type: SWITCH_VARIANT, payload });
};

export const fetchProduct = productId => async dispatch => {
  // const res = await axios.get(`/api/product/${productId}`);
  // const payload = _.omit(res.data.product, 'body_html');
  const payload = productData.product;
  dispatch({ type: FETCH_PRODUCT, payload });
};

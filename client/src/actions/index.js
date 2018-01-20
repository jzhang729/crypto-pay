import _ from 'underscore';
import axios from 'axios';
import { FETCH_PRODUCT } from './types';

export const fetchProduct = productId => async dispatch => {
  const res = await axios.get(`/api/pay/${productId}`);
  const payload = _.pick(
    res.data.product,
    'id',
    'image',
    'images',
    'options',
    'title',
    'variants',
    'vendor'
  );

  dispatch({ type: FETCH_PRODUCT, payload });
};

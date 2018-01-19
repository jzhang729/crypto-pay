import axios from 'axios';
import { FETCH_PRODUCT } from './types';

export const fetchProduct = () => async dispatch => {
  const res = await axios.get('/api/current_product');
  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

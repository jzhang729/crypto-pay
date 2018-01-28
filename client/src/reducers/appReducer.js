import variantData from '../mocks/variant';
import customerData from '../mocks/customer';

import {
  SET_CUSTOMER,
  SET_LOADING,
  SET_TRANSACTION,
  FETCH_CURRENCY,
  SWITCH_CURRENCY,
  SWITCH_VARIANT,
  UPDATE_PROGRESS
} from '../actions/types';

const initialState = {
  loading: false,
  progress: 0,
  currency: undefined,
  currencyData: {},
  // customer: { _id: '' },
  // selectedVariant: {}
  customer: customerData.customer,
  selectedVariant: variantData.variant,
  transaction: {}
};

export default function(state = initialState, { payload, type }) {
  switch (type) {
    case FETCH_CURRENCY:
      return { ...state, currencyData: payload };
    case SET_CUSTOMER:
      return { ...state, customer: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_TRANSACTION:
      return { ...state, transaction: payload };
    case SWITCH_CURRENCY:
      return { ...state, currency: payload };
    case SWITCH_VARIANT:
      return {
        ...state,
        selectedVariant: payload
      };
    case UPDATE_PROGRESS:
      return { ...state, progress: payload };
    default:
      return state;
  }
}

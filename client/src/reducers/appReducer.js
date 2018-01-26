import {
  SET_CUSTOMER,
  SET_LOADING,
  FETCH_CURRENCY,
  SWITCH_CURRENCY,
  SWITCH_VARIANT,
  UPDATE_PROGRESS
} from '../actions/types';

const initialState = {
  loading: false,
  progress: 0,
  currency: undefined,
  currencyData: {
    price_usd: ''
  },
  customer: { _id: '' },
  selectedVariant: {}
};

export default function(state = initialState, { payload, type }) {
  switch (type) {
    case FETCH_CURRENCY:
      return { ...state, currencyData: payload };
    case SET_CUSTOMER:
      return { ...state, customer: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
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

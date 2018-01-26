import {
  SET_LOADING,
  FETCH_CURRENCY,
  SWITCH_CURRENCY,
  UPDATE_PROGRESS
} from '../actions/types';

const initialState = {
  loading: false,
  progress: 0,
  currency: undefined,
  currencyData: {
    price_usd: ''
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCY:
      return { ...state, currencyData: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SWITCH_CURRENCY:
      return { ...state, currency: action.payload };
    case UPDATE_PROGRESS:
      return { ...state, progress: action.payload };
    default:
      return state;
  }
}

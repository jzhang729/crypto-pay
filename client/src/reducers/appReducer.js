// import variantData from '../mocks/variant';
// import customerData from '../mocks/customer';

import {
  SET_CUSTOMER,
  SET_LOADING,
  SET_TRANSACTION,
  FETCH_CURRENCY,
  SWITCH_CURRENCY,
  SWITCH_VARIANT,
  UPDATE_PROGRESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  GO_TO_PAGE
} from '../actions/types';

const initialState = {
  loading: false,
  progress: 0,
  page: 1,
  currency: undefined, // The currency that is selected in the dropdown
  currencyData: {
    // The currency data that gets returned from Coinmarketcap
    price_usd: '',
    name: '',
    symbol: '',
    last_updated: ''
  },
  customer: { _id: '' },
  selectedVariant: {},
  transaction: {
    priceInCrypto: '',
    currency: {
      coinName: '',
      coinSymbol: '',
      coinPriceUSD: '',
      coinLastUpdated: ''
    }
  }
  // customer: customerData.customer,
  // selectedVariant: variantData.variant,
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
    case INCREMENT_PAGE:
      return { ...state, page: state.page + 1 };
    case DECREMENT_PAGE:
      return { ...state, page: state.page - 1 };
    case GO_TO_PAGE:
      return { ...state, page: payload };
    default:
      return state;
  }
}

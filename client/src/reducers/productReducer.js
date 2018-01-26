import { FETCH_PRODUCT, SWITCH_VARIANT } from '../actions/types';

const initialState = {
  info: {
    image: { src: '' },
    title: '',
    variants: []
  },
  selectedVariant: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, info: action.payload };
    case SWITCH_VARIANT:
      return {
        ...state,
        selectedVariant: action.payload
      };
    default:
      return state;
  }
}

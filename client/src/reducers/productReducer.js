import { FETCH_PRODUCT } from '../actions/types';

const initialState = {
  loading: false,
  selectedVariant: {},
  info: {
    image: { src: '' },
    title: '',
    variants: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, info: action.payload };
    default:
      return state;
  }
}

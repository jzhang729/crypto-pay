import { SWITCH_CURRENCY, UPDATE_PROGRESS } from '../actions/types';

const initialState = {
  progress: 0,
  currency: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SWITCH_CURRENCY:
      return { ...state, currency: action.payload };
    case UPDATE_PROGRESS:
      return { ...state, progress: action.payload };
    default:
      return state;
  }
}

import { DECREMENT, INCREMENT, INCREMENTBYVALUE, RESET } from '../action';

const initialState = {
  value: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        value: state.value - 1,
      };
    case RESET:
      return {
        value: 0,
      };
    case INCREMENTBYVALUE:
      return {
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

import { types } from "../actions/counterActions";

const counterReducer = (state = 1, action: any) => {
  switch (action.type) {
    case types.increment:
      return state + 1;
    case types.decrement:
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;

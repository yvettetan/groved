import { combineReducers } from "redux";
import { cartReducer } from "./cart";

const rootReducer = combineReducers({
  cart: cartReducer.reducer,
});
export default rootReducer;

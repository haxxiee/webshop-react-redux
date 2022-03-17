import * as actionTypes from "../types";
import { combineReducers } from "redux";
const products = require("../../fakedata/fakedata.json");

const INITAL_STATE = {
  products: products,
  cart: [],
};

const webshopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((item) => item.id === action.payload.id);
      const inCart = state.cart.some((item) => item.id === action.payload.id);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + parseInt(action.payload.qty) }
                : item
            )
          : [...state.cart, { ...item, qty: parseInt(action.payload.qty) }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.CHANGE_QTY:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  shop: webshopReducer,
});

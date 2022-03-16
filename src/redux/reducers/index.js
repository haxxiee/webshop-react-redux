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
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.CHANGE_QTY:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  shop: webshopReducer,
});

import * as actionTypes from "../types";

export const addToCart = (itemId, qty) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
      qty: qty,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const changeQty = (itemId, qty) => {
  return {
    type: actionTypes.CHANGE_QTY,
    payload: {
      id: itemId,
      qty: qty,
    },
  };
};

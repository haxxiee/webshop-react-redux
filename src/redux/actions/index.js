import * as actionTypes from "../types";
import fakeStore from "../../apis/fakeStore";

// CART ACTIONS
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

export const fetchCarts = () => async (dispatch) => {
  const response = await fakeStore.get("/carts");

  dispatch({ type: actionTypes.FETCH_CARTS, payload: response.data });
};

// PRODUCT ACTIONS
export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStore.get("/products");

  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const filterProducts = (category) => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    payload: {
      category: category,
    },
  };
};

export const removeProduct = (id) => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    payload: {
      id: id,
    },
  };
};

export const updateProduct = (prod) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    payload: {
      id: prod.id,
      title: prod.title,
      price: prod.price,
      description: prod.description,
      category: prod.category,
    },
  };
};

// USER ACTIONS
export const fetchUsers = () => async (dispatch) => {
  const response = await fakeStore.get("/users");

  dispatch({ type: actionTypes.FETCH_USERS, payload: response.data });
};

export const addUser = (info) => async (dispatch) => {
  const response = await fakeStore.post("/users", {
    email: info.email,
    username: info.uname,
    password: info.pword,
    role: "user",
    name: {
      firstname: info.fname,
      lastname: info.lname,
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
    },
    phone: "1-570-236-7033",
  });

  dispatch({ type: actionTypes.ADD_USER, payload: response.data });
};

export const resetCurrentUser = () => {
  return {
    type: actionTypes.RESET_CURRENT_USER,
    payload: {},
  };
};

export const getUser = (userId) => {
  return {
    type: actionTypes.GET_USER,
    payload: {
      id: userId,
    },
  };
};

export const updateUser = (userId, userInfo) => {
  return {
    type: actionTypes.UPDATE_USER_INFO,
    payload: {
      id: userId,
      phone: userInfo.phone,
      addressInfo: userInfo.address,
    },
  };
};

// SIGNING ACTIONS
export const postSignIn = (username, password) => async (dispatch) => {
  const response = await fakeStore.post("/auth/login", {
    username: username,
    password: password,
  });

  dispatch({ type: actionTypes.POST_SIGN_IN, payload: response.data });
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
    payload: {
      token: null,
      userId: null,
    },
  };
};

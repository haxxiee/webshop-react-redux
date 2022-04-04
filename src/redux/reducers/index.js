import * as actionTypes from "../types";
import { combineReducers } from "redux";

const INITAL_STATE_WEBSHOP = {
  products: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  userCarts: [],
  productsShowing: [],
};

const INITAL_STATE_USERS = {
  users: [],
  currentUser: {
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
    },
    id: 0,
    role: "",
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    phone: "",
  },
};

const INITAL_STATE_AUTH = {
  token: null,
  userId: null,
};

const webshopReducer = (state = INITAL_STATE_WEBSHOP, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsShowing: action.payload,
      };
    case actionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        productsShowing: action.payload.category
          ? state.products.filter(
              (item) => item.category === action.payload.category
            )
          : state.products,
      };
    case actionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case actionTypes.UPDATE_PRODUCT:
      const test = state.products.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: item.title,
              price: item.price,
              description: item.description,
              category: item.category,
            }
          : item
      );
      console.log(test);
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                title: action.payload.title,
                price: action.payload.price,
                description: action.payload.description,
                category: action.payload.category,
              }
            : item
        ),
      };
    case actionTypes.FETCH_CARTS:
      return {
        ...state,
        userCarts: action.payload,
      };
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
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};

const userReducer = (state = INITAL_STATE_USERS, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return { ...state, users: action.payload };
    case actionTypes.ADD_USER:
      return state;
    case actionTypes.GET_USER:
      const user = state.users.find((user) => user.id === action.payload.id);
      return {
        ...state,
        currentUser: user,
      };
    case actionTypes.RESET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          address: {
            city: "",
            street: "",
            number: 0,
            zipcode: "",
          },
          id: 0,
          role: "",
          email: "",
          username: "",
          password: "",
          name: {
            firstname: "",
            lastname: "",
          },
          phone: "",
        },
      };
    case actionTypes.UPDATE_USER_INFO:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                phone: action.payload.phone,
                address: action.payload.addressInfo,
              }
            : item
        ),
      };

    default:
      return state;
  }
};

const authReducer = (state = INITAL_STATE_AUTH, action) => {
  switch (action.type) {
    case actionTypes.POST_SIGN_IN:
      return action.payload;
    case actionTypes.SIGN_OUT:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  shop: webshopReducer,
  users: userReducer,
  auth: authReducer,
});

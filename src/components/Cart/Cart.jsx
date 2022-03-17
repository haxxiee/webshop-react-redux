import React from "react";
import { connect } from "react-redux";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  // function to sum total price
  const totalPrice = () => {};

  // function to sum amount of items in cart
  const sumOfCartItems = () => {};

  return (
    <div>
      <div className={styles.cart__container}>
        <div className={styles.cart__item__container}>
          {cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <div className={styles.cart__info}>
          <h2>Cart Summary</h2>
          <h4>TOTAL: (2 items)</h4>
          <span>$ 30</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

export default connect(mapStateToProps)(Cart);

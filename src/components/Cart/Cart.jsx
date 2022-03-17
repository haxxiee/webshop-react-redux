import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [sum, setSum] = useState({ totalItems: 0, totalAmount: 0 });

  useEffect(() => {
    setSum({
      totalAmount: Object.values(cart).reduce(
        (t, { price, qty }) => t + price * qty,
        0
      ),
      totalItems: Object.values(cart).reduce((t, { qty }) => t + qty, 0),
    });
    // Saving to localStorage as "cart"
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className={styles.cart__container}>
      {cart.length === 0 ? <h1>Cart is empty</h1> : ""}
      <div className={styles.cart__item__container}>
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <div className={styles.cart__info}>
        <h2>Cart Summary</h2>
        <h4>TOTAL: ({sum.totalItems} items)</h4>
        <span>$ {sum.totalAmount.toFixed(2)}</span>
        <button>Checkout!</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

export default connect(mapStateToProps)(Cart);

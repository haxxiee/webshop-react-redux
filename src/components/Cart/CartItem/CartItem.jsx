import React from "react";
import { connect } from "react-redux";
import styles from "./CartItem.module.scss";
import { removeFromCart } from "../../../redux/actions";

const CartItem = ({ product, removeFromCart }) => {
  return (
    <div className={styles.cartitem__container}>
      <div className={styles.image__container}>
        <img src={product.image} alt="test" />
      </div>
      <div className={styles.product__info}>
        <h2>{product.title}</h2>
        <h1>$ {product.price}</h1>
        <p>{product.description}</p>

        <div className={styles.input__container}>
          <button onClick={() => removeFromCart(parseInt(product.id))}>
            Remove from cart
          </button>
          <div className={styles.input__label}>
            <label>QTY:</label>
            <input type="number" min="1" max="10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

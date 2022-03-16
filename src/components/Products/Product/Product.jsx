import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions";
import styles from "./Product.module.scss";

const Product = ({ product, addToCart }) => {
  const [qty, setQty] = useState(1);

  const onChangeHandler = (e) => {
    setQty(e.target.value);
  };

  // console.log(typeof qty);

  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.description}>
        <h2>{product.title}</h2>
        <h1>{product.price} $</h1>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product.id, qty)}>Add to Cart</button>
        <label>qty:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={qty}
          onChange={onChangeHandler}
        />

        <button>Test</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, qty) => dispatch(addToCart(id, qty)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import styles from "./ProductPage.module.scss";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/actions";

const ProductPage = ({ products, addToCart, cart }) => {
  const [qty, setQty] = useState(1);
  const param = useParams();

  const product = products.find((item) => item.id === parseInt(param.id));

  const notify = () =>
    toast.success("Added to cart", { position: "bottom-right" });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [addToCart, cart]);

  return (
    <div className={styles.productpage__container}>
      <div className={styles.image__container}>
        <img src={product.image} alt="test" />
      </div>
      <div className={styles.product__info}>
        <h2>{product.title}</h2>
        <h1>$ {product.price}</h1>
        <p>{product.description}</p>

        <div className={styles.input__container}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(parseInt(param.id), qty);
              setQty(1);
              notify();
            }}
          >
            Add to cart
          </button>
          <div className={styles.input__label}>
            <label>QTY:</label>
            <input
              type="number"
              min="1"
              max="10"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.productsShowing, cart: state.shop.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, qty) => dispatch(addToCart(id, qty)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

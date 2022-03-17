import React, { useEffect } from "react";
import { connect } from "react-redux";
import Product from "./Product/Product";
import styles from "./Products.module.scss";

const Products = ({ products, cart }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [products, cart]);
  return (
    <div className={styles.products__container}>
      <h1>All Products</h1>
      <div className={styles.product__grid}>
        {products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products, cart: state.shop.cart };
};

export default connect(mapStateToProps)(Products);

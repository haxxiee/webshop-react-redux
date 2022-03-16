import React from "react";
import { connect } from "react-redux";
import Product from "./Product/Product";
import styles from "./Products.module.scss";

const Products = ({ products }) => {
  return (
    <div className={styles.products__container}>
      <h1>Products</h1>
      <div className={styles.product__grid}>
        {products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products };
};

export default connect(mapStateToProps)(Products);

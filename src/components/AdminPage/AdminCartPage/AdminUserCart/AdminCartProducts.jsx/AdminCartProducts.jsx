import React from "react";
import { connect } from "react-redux";
import styles from "./AdminCartProducts.module.scss";

const AdminCartProducts = ({ product, products }) => {
  const productInfo = products.find((item) => item.id === product.productId);
  return (
    <>
      <div className={styles.product__wrapper}>
        <div>Product id: {productInfo.id}</div>
        <div>{productInfo.title}</div>
        <div>${productInfo.price}</div>
        <div>QTY: {product.quantity}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products };
};
export default connect(mapStateToProps)(AdminCartProducts);

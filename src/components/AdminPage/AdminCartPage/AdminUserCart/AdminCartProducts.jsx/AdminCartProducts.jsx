import React from "react";
import { connect } from "react-redux";
import styles from "./AdminCartProducts";

const AdminCartProducts = ({ product, products }) => {
  const productInfo = products.find((item) => item.id === product.productId);
  return (
    <div>
      <div>{productInfo.title}</div>
      <div>{productInfo.price}</div>
      <div>quantity: {product.quantity}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products };
};
export default connect(mapStateToProps)(AdminCartProducts);

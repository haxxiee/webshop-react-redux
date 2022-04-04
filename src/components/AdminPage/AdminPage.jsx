import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./AdminPage.module.scss";
import ProductAdmin from "./ProductAdmin/ProductAdmin";

const AdminPage = ({ products }) => {
  return (
    <div className={styles.admin__page}>
      <h2>All Products</h2>
      <Link to={"/admin/carts"}>
        <button>Go to all carts</button>
      </Link>
      <div>
        {products.map((item) => (
          <ProductAdmin key={item.id} prod={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products };
};

export default connect(mapStateToProps)(AdminPage);

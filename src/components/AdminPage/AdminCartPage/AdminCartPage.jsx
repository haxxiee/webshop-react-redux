import React from "react";
import { connect } from "react-redux";
import styles from "./AdminCartPage.module.scss";
import AdminUserCart from "./AdminUserCart/AdminUserCart";

const AdminCartPage = ({ carts }) => {
  console.log(carts);
  return (
    <div>
      <h2>Carts</h2>
      <div>
        {carts.map((item) => (
          <AdminUserCart key={item.id} cart={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { carts: state.shop.userCarts };
};

export default connect(mapStateToProps)(AdminCartPage);

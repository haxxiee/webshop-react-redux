import React from "react";
import { connect } from "react-redux";
import AdminCartProducts from "./AdminCartProducts.jsx/AdminCartProducts";
import styles from "./AdminUserCart.module.scss";

const AdminUserCart = ({ cart, users }) => {
  const user = users.find((user) => user.id === cart.userId);

  return (
    <div className={styles.user__products}>
      <section className={styles.user__products__userinfo}>
        <h3>
          {user.name.firstname} {user.name.lastname}
        </h3>
        <h4>UserId: {user.id}</h4>
      </section>

      <div className={styles.user__products__prodinfo}>
        {cart.products.map((item) => (
          <AdminCartProducts key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users.users };
};

export default connect(mapStateToProps)(AdminUserCart);

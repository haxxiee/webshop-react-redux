import React from "react";
import { connect } from "react-redux";
import AdminUser from "./AdminUser/AdminUser";

import styles from "./AdminUsersPage.module.scss";

const AdminUsersPage = ({ users }) => {
  console.log(users);
  return (
    <div className={styles.main}>
      <h2>All Users</h2>
      <ul>
        {users.map((item) => (
          <AdminUser key={item.id} user={item} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users.users };
};

export default connect(mapStateToProps)(AdminUsersPage);

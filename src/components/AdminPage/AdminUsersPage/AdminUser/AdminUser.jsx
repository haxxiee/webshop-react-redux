import React from "react";

import styles from "./AdminUser.module.scss";

const AdminUser = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className={styles.container}>
        <li>
          <b>*</b>
        </li>
        <li>
          <b>ID:</b> {user.id}
        </li>
        <li>
          <b>Firstname:</b> {user.name.firstname}
        </li>
        <li>
          <b>Lastname:</b> {user.name.lastname}
        </li>
        <li>
          <b>Username:</b> {user.username}
        </li>
        <li>
          <b>Password:</b> {user.password}
        </li>
        <li>
          <b>Email:</b> {user.email}
        </li>
      </div>
    </>
  );
};

export default AdminUser;

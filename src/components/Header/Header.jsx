import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/cart"}>
        <h1>Header</h1>
      </Link>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header}>
        <Link to={"/"}>
          <div className={styles.logo}>Amaxon</div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

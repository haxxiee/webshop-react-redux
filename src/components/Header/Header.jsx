import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut, resetCurrentUser } from "../../redux/actions";
import LoginModal from "../Modals/LoginModal/LoginModal";
import SignupModal from "../Modals/SignupModal/SignupModal";
import styles from "./Header.module.scss";

const Header = ({ auth, user, signOut, resetCurrentUser }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const renderAuthButton = () => {
    if (auth.token === null) {
      return (
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className={styles.login__btn}
        >
          Login
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            resetCurrentUser();

            signOut();
          }}
          className={styles.signout__btn}
        >
          Sign Out
        </button>
      );
    }
  };
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header}>
        <Link to={"/"}>
          <div className={styles.logo}>
            Ama<span>x</span>on
          </div>
        </Link>
        <nav>
          <ul>
            {user.role !== "admin" && (
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            )}
            {user.role !== "admin" && (
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
            )}
            {user.role !== "admin" && (
              <li>
                <Link to={"/cart"}>Cart</Link>
              </li>
            )}

            {user.role === "admin" && (
              <li>
                <Link to={"/admin"}>Admin Page</Link>
              </li>
            )}

            {auth.token && (
              <li>
                <Link to={"/account"}>Account</Link>
              </li>
            )}
          </ul>
          <ul>
            {!auth.token && (
              <button
                onClick={() => {
                  setIsSignupModalOpen(true);
                }}
                className={styles.signup__btn}
              >
                Sign Up
              </button>
            )}

            <SignupModal
              open={isSignupModalOpen}
              onClose={() => setIsSignupModalOpen(false)}
            />
            <li>{renderAuthButton()}</li>
            <LoginModal
              open={isLoginModalOpen}
              onClose={() => setIsLoginModalOpen(false)}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapsStateToProps = (state) => {
  return { auth: state.auth, user: state.users.currentUser };
};

export default connect(mapsStateToProps, { signOut, resetCurrentUser })(Header);

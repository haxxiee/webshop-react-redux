import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../redux/actions";
import LoginModal from "../Modals/LoginModal/LoginModal";
import SignupModal from "../Modals/SignupModal/SignupModal";
import styles from "./Header.module.scss";

const Header = ({ auth, signOut }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const renderAuthButton = () => {
    if (auth.token === null) {
      return (
        <button onClick={() => setIsLoginModalOpen(true)} className="">
          Login
        </button>
      );
    } else {
      return (
        <button onClick={() => signOut()} className="">
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
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
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
  return { auth: state.auth };
};

export default connect(mapsStateToProps, { signOut })(Header);

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import styles from "./LoginModal.module.scss";
import { postSignIn, getUser } from "../../../redux/actions";

const LoginModal = ({ auth, open, onClose, postSignIn, getUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (auth.userId !== null) {
      getUser(auth.userId);
    }
  }, [auth.userId]);

  if (!open) return null;

  const onLoginClickHandler = (username, password) => {
    postSignIn(username, password);

    setUsername("");
    setPassword("");
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal__shadow} onClick={onClose} />
      <div className={styles.modal__wrapper}>
        <form action="">
          <h5>USERNAME</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>PASSWORD</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button onClick={() => onLoginClickHandler(username, password)}>
          Login
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

const mapsStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapsStateToProps, { postSignIn, getUser })(LoginModal);

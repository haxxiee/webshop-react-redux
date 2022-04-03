import React, { useState } from "react";
import { addUser } from "../../../redux/actions";
import ReactDOM from "react-dom";
import { fetchUsers } from "../../../redux/actions";
import styles from "./SignupModal.module.scss";
import { connect } from "react-redux";

const SignupModal = ({ open, onClose, addUser, fetchUsers }) => {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    uname: "",
    pword: "",
    email: "",
  });

  const resetInfoState = () => {
    setInfo({
      fname: "",
      lname: "",
      uname: "",
      pword: "",
      email: "",
    });
  };

  const submitButtonHandler = () => {
    for (const item in info) {
      if (info[item].length < 3) return alert("FYLL I ALLT FÖRFAN");
    }

    addUser(info);
    setTimeout(() => {
      fetchUsers();
    }, 1000);
    onClose();
    resetInfoState();
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal__shadow} onClick={onClose} />
      <div className={styles.modal__wrapper}>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h5>FIRSTNAME</h5>
          <input
            type="text"
            value={info.fname}
            onChange={(e) => setInfo({ ...info, fname: e.target.value })}
          />
          <h5>LASTNAME</h5>
          <input
            type="text"
            value={info.lname}
            onChange={(e) => setInfo({ ...info, lname: e.target.value })}
          />
          <h5>USERNAME</h5>
          <input
            type="text"
            value={info.uname}
            onChange={(e) => setInfo({ ...info, uname: e.target.value })}
          />
          <h5>PASSWORD</h5>
          <input
            type="text"
            value={info.pword}
            onChange={(e) => setInfo({ ...info, pword: e.target.value })}
          />
          <h5>E-MAIL</h5>
          <input
            type="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </form>
        <button onClick={() => submitButtonHandler()}>Create Account</button>

        <button
          onClick={() => {
            onClose();
            resetInfoState();
          }}
        >
          Close
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default connect(null, { addUser, fetchUsers })(SignupModal);

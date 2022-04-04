import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getUser, updateUser } from "../../redux/actions";
import styles from "./AccountPage.module.scss";

const AccountPage = ({ auth, user, getUser, updateUser }) => {
  const [userState, setUserState] = useState({
    phone: "",
    address: {
      city: "",
      number: 0,
      street: "",
      zipcode: "",
    },
  });
  useEffect(() => {
    // getUser(auth.userId);

    setUserState({
      phone: user.phone,
      address: {
        city: user.address?.city,
        number: user.address?.number,
        street: user.address?.street,
        zipcode: user.address?.zipcode,
      },
    });
  }, [user]);

  return (
    <>
      <div className={styles.accountpage}>
        {user.role === "admin" && <h6>ADMIN</h6>}
        <section className={styles.accountpage__welcome}>
          <h1>Welcome {user.name?.firstname} to your account page</h1>
          <h2>Customer ID: {user.id}</h2>
        </section>
        <div className={styles.flextest}>
          <section className={styles.accountpage__maininfo}>
            <h3>User Info</h3>

            <div className="item">
              <label htmlFor="fname">NAME: </label>
              <input
                type="text"
                id="fname"
                defaultValue={user.name?.firstname || ""}
                readOnly
                required
              />
            </div>
            <div className="item">
              <label htmlFor="lname">LASTNAME: </label>
              <input
                type="text"
                id="lname"
                defaultValue={user.name?.lastname || ""}
                readOnly
                required
              />
            </div>
            <div className="item">
              <label htmlFor="email">EMAIL: </label>
              <input
                type="email"
                id="email"
                defaultValue={user.email || ""}
                readOnly
                required
              />
            </div>
            <div className="item">
              <label htmlFor="tel">PHONE-NUMBER: </label>
              <input
                type="tel"
                id="tel"
                value={userState.phone}
                required
                onChange={(e) =>
                  setUserState({
                    ...userState,
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </section>
          <section className={styles.accountpage__address}>
            <h3>Address</h3>
            <div className="item">
              <label htmlFor="city">CITY: </label>
              <input
                type="text"
                id="city"
                value={userState.address.city}
                required
                onChange={(e) =>
                  setUserState({
                    ...userState,
                    address: {
                      ...userState.address,
                      city: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="item">
              <label htmlFor="number">NUMBER: </label>
              <input
                type="number"
                id="number"
                value={userState.address.number}
                required
                onChange={(e) =>
                  setUserState({
                    ...userState,
                    address: {
                      ...userState.address,
                      number: parseInt(e.target.value),
                    },
                  })
                }
              />
            </div>
            <div className="item">
              <label htmlFor="street">STREET: </label>
              <input
                type="text"
                id="street"
                value={userState.address.street}
                onChange={(e) =>
                  setUserState({
                    ...userState,
                    address: {
                      ...userState.address,
                      street: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
            <div className="item">
              <label htmlFor="zipcode">ZIPCODE: </label>
              <input
                type="text"
                id="zipcode"
                value={userState.address.zipcode}
                required
                onChange={(e) =>
                  setUserState({
                    ...userState,
                    address: {
                      ...userState.address,
                      zipcode: e.target.value,
                    },
                  })
                }
              />
            </div>
          </section>
        </div>
        <div className={styles.btn__wrapper}>
          <button onClick={() => updateUser(user.id, userState)}>
            Save changes
          </button>
        </div>
      </div>
    </>
  );
};

const mapsStateToProps = (state) => {
  return { auth: state.auth, user: state.users.currentUser };
};

export default connect(mapsStateToProps, { getUser, updateUser })(AccountPage);

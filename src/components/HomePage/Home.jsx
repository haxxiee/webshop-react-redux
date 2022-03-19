import styles from "./Home.module.scss";

import React from "react";

const HomePage = () => {
  return (
    <div className={styles.home__main}>
      <div className={styles.svg__container}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#aedaa6"
            d="M37.2,-40.3C48.9,-25.5,59.5,-12.8,60.1,0.6C60.7,14,51.3,27.9,39.6,37C27.9,46.1,14,50.3,-2,52.3C-18,54.3,-36,54.2,-46.7,45.1C-57.3,36,-60.7,18,-61,-0.3C-61.3,-18.5,-58.5,-37.1,-47.8,-51.9C-37.1,-66.7,-18.5,-77.7,-2.9,-74.8C12.8,-71.9,25.5,-55.1,37.2,-40.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={styles.text__container}>
        <h1>
          Welcome to Ama<span>x</span>on
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

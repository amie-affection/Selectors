import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <NavLink exact to="/" activeClassName={styles.active}>
              MainPage
            </NavLink>
          </li>

          <li className={styles.listItem}>
            <NavLink exact to="/formPage" activeClassName={styles.active}>
              FormPage
            </NavLink>
          </li>

          <li className={styles.listItem}>
            <NavLink exact to="/counterPage" activeClassName={styles.active}>
              CounterPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

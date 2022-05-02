import React, { Fragment } from "react";
import styles from "./Navbar.module.css";
import NavbarSearchForm from "./NavbarSearchForm/NavbarSearchForm";

function Navbar(props) {
  return (
    <Fragment>
      <nav className={`${styles.mainNavbarContainer}`}>
        <a href="/">
          <h1>
            <span>Rest</span>Countries
          </h1>
        </a>
        <NavbarSearchForm
          searchFormSubmit={searchFormSubmitHandler}
        ></NavbarSearchForm>
      </nav>
    </Fragment>
  );

  function searchFormSubmitHandler(query) {
    // we lift the state up to App.js
    props.navbarSearchFormSubmit(query);
  }
}

export default Navbar;

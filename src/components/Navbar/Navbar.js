import React from "react";
import styles from "./Navbar.module.css";
import NavbarSearchForm from "./NavbarSearchForm/NavbarSearchForm";

function Navbar(props) {
  return (
    <nav className={`${styles.mainNavbarContainer}`}>
      <h1>RestCountriesApp</h1>
      <NavbarSearchForm
        searchFormSubmit={searchFormSubmitHandler}
      ></NavbarSearchForm>
    </nav>
  );

  function searchFormSubmitHandler(query) {
    // we lift the state up to App.js
    props.navbarSearchFormSubmit(query);
  }
}

export default Navbar;

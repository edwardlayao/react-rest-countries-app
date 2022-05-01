import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./NavbarSearchForm.module.css";

function NavbarSearchForm(props) {
  const [searchFormInput, setSearchFormInput] = useState("");
  return (
    <form onSubmit={searchFormSubmit} className={`${styles.navbarSearchForm}`}>
      <label>Search for a country: </label>
      <input
        value={searchFormInput}
        onChange={updateInputSearchFormState}
        type="text"
      ></input>
      <Button
        buttonClickHandler={null}
        appendClass={styles.button}
        label={"Search"}
      ></Button>
    </form>
  );

  //   On-change we update seachFormInput state
  function updateInputSearchFormState(event) {
    setSearchFormInput(event.target.value);
  }

  //  On-submit we add searchFormInput value and dispatch it to props handler, then we reset the state.
  function searchFormSubmit(event) {
    event.preventDefault();
    //we guard for empty inputs
    if (!searchFormInput.trim()) return;
    props.searchFormSubmit(searchFormInput.trim());
    setSearchFormInput("");
  }
}

export default NavbarSearchForm;

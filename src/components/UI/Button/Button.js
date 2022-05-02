import React, { Fragment } from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <Fragment>
      <button
        onClick={props.buttonClickHandler}
        className={`${styles.button} ${props.appendClass}`}
      >
        {props.label}
      </button>
    </Fragment>
  );
}

export default Button;

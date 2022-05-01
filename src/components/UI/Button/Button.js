import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      onClick={props.buttonClickHandler}
      className={`${styles.button} ${props.appendClass}`}
    >
      {props.label}
    </button>
  );
}

export default Button;

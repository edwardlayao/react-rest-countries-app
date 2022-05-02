import React, { Fragment } from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <Fragment>
      <div className={`${styles.card} ${props.appendClass}`}>
        {props.children}
      </div>
    </Fragment>
  );
}

export default Card;

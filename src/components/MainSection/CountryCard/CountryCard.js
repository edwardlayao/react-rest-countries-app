import React, { Fragment } from "react";
import Card from "../../UI/Card/Card";
import styles from "./CountryCard.module.css";

function CountryCard(props) {
  console.log(props.data);
  return (
    <Fragment>
      <Card appendClass={styles.countryCard}>
        <h2>{props.data.name.common}</h2>
        <img src={props.data.flags} alt="" />
        <h2>Population: {props.data.pops}</h2>
        <div className={styles.latlng}>
          <p>Latitude {props.data.latlng[0]}</p>
          <p>Longitude {props.data.latlng[1]}</p>
        </div>
      </Card>
    </Fragment>
  );
}
export default CountryCard;

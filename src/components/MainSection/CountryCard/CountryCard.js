import React, { Fragment } from "react";
import Card from "../../UI/Card/Card";
import styles from "./CountryCard.module.css";

function CountryCard(props) {
  return (
    <Fragment>
      <Card appendClass={styles.countryCard}>
        <h2>{props.countryData.name.common}</h2>
        <img src={props.countryData.flags} alt="" />
        <h2>Population: {props.countryData.pops}</h2>
        <div className={styles.latlng}>
          <p>Latitude {props.countryData.latlng[0]}</p>
          <p>Longitude {props.countryData.latlng[1]}</p>
        </div>
      </Card>
    </Fragment>
  );
}
export default CountryCard;

import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./CountryCard.module.css";

function CountryCard(props) {
  return (
    <Card appendClass={styles.countryCard}>
      <h1>{props.countryData.name.official}</h1>
      <h2>{props.countryData.name.common}</h2>
      <img src={props.countryData.flags} alt="" />
      <h2>Population: {props.countryData.pops}</h2>
    </Card>
  );
}
export default CountryCard;

import React, { Fragment } from "react";
import CountryCard from "./CountryCard/CountryCard";
import styles from "./MainSection.module.css";

// TODO: Add pagination for multiple results
// TODO: Add more info to countryCard
// TODO: Add a CSS grid, media queries for responsiveness

function MainSection(props) {
  // we set headerContent and countryContent to theri default values
  let headerContent = <h4>Showing {props.countryData.length} results</h4>;
  let countryContent = null;

  // This only shows the first time the app is run...
  if (!props.countryData.length)
    headerContent = <h4>Try Searching for a country in the search bar.</h4>;

  // We check if countryData contains a countryData obj, or a 404 int
  // 404 int means there was a problem in the query of the api
  // else we render the content with the countryData data.
  if (props.countryData === 404) {
    headerContent = <h4>Looks like your query is not found on the API.</h4>;
  } else {
    countryContent = props.countryData.map((country) => {
      return (
        <CountryCard key={Math.random()} countryData={country}></CountryCard>
      );
    });
  }

  return (
    <Fragment>
      <div className={`${styles.mainSection}`}>
        <header>{headerContent}</header>
        <div className={styles.mainContent}>{countryContent}</div>
      </div>
    </Fragment>
  );
}

export default MainSection;

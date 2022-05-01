import React, { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [countryData, setCountryData] = useState([]);
  return (
    <div className="App">
      <Navbar navbarSearchFormSubmit={navbarSearchFormSubmitHandler}></Navbar>
      <MainSection countryData={countryData}></MainSection>
    </div>
  );

  function navbarSearchFormSubmitHandler(query) {
    getRESTCountryData(query);
  }

  async function getRESTCountryData(query) {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );
      if (!response.ok) throw new Error("404 not found.");
      const data = await response.json();

      // we make our own data structure that will be passed on the props.
      const countriesArray = data.map((country) => {
        const countryArray = {
          name: country.name,
          capital: country.capital,
          pops: country.population,
          flags: country.flags.png,
          latlng: country.latlng,
          region: country.region,
        };
        return countryArray;
      });
      // then we update prop state
      setCountryData(countriesArray);
    } catch (error) {
      setCountryData(404);
      console.error(error);
    }
    // we search for the name and fetch the data from name endpoint
  }
}

export default App;

import React, {useState, useEffect} from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import axios from 'axios';

import countriesData from "./countries.json";




function App() {
  
  /*
  const [countries, setCountries] = useState(countriesData);
  // console.log(countries)
*/
  
  const [countryApi, setcountryApi] = useState([]);

  useEffect(() => {
    const getCountryData = async () => {
      try {
        const data = await axios.get(' https://ih-countries-api.herokuapp.com/countries');
        setcountryApi(data.data)
        // console.log(data.data)
  
      } catch (error) {
        console.log(error)
      }
    } 
    getCountryData();
}, [])

 

  return (
  <div className="App">
    <Navbar />

    <div className="container">
     <CountriesList countries={countryApi}/>
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails countries={countriesData}  />} />
      </Routes>
  </div>
</div>

  
  );
}
export default App;
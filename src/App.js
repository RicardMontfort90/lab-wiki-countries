import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import axios from 'axios';

import countriesData from "./countries.json";

function App() {
  const [countries, setCountries] = useState(countriesData);


  return <div className="App"></div>;
}
export default App;
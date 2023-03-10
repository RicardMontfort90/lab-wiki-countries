import React, {useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


export default function CountryDetails() {
    const [countryApiDetails, setcountryApiDetails] = useState(null);
    const { alpha3Code } = useParams();


}
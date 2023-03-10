import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function CountryDetails() {
    const [countryApiDetails, setcountryApiDetails] = useState(null);
    const { alpha3Code } = useParams();
    

    useEffect(() => {
        const getCountryData = async () => {
            try {
                const data = await axios.get(` https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
                setcountryApiDetails(data.data)
            } 
            catch (error) {
            console.log(error)
            }
        } 
        getCountryData();
    }, [alpha3Code])

    return (
        <div className='details'>
            {countryApiDetails && (
            <div>
                <img src= {`https://flagpedia.net/data/flags/icon/72x54/${countryApiDetails.alpha2Code.toLowerCase()}.png`} alt=""/>
                <h2>{countryApiDetails.name.common}</h2>
                <p>Capital {countryApiDetails.capital} </p>
                <p>Area {countryApiDetails.area} </p>
                <div className='borders'>
                    <p>Borders</p>
                    <div className='eachBorder'>
                        {countryApiDetails.borders.map((elem) => {
                
                        return (
                            <div key={elem}>
                                <Link to={`/${elem}`}> {elem}</Link>
                            </div>
                        ) 
                })}
                    </div>
                </div>
            </div>
            )} 
                {!countryApiDetails && <p>Country not found</p>}
        </div>
    );
};
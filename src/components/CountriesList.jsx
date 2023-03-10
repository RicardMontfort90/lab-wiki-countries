import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    const {countries} = props;

    return (
        <div ClassName='list'>
            {countries.map((country) => {
                return (
                    <div className='list-group' key={country.alpha3Code}>
                    <img   src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" width = '50px'/>
                    <Link to={country.alpha3Code}> {country.name.common} </Link>
                    </div>
                )
            })}
        </div>
    );
};
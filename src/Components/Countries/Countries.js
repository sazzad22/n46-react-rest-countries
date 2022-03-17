import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
        
    },[])

    return (
        <div>
            <h2>Visiting Countries From External file</h2>
            <h2>All the countries:{countries.length}</h2>
            {/* {
                countries.map(country => <Country name={country.name.common}  flag={country.flags.png}></Country>)
            } */}
            {/* //todo instead of sendign each obj from the data We can just send the whole data and display through the child component */}

            {
                countries.map(country=> <Country  country={country}> </Country>)
            }

        </div>
    );
};

export default Countries;
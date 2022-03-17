import React from 'react';
import './Country.css'
const Country = (props) => {

    console.log(props.country);
    const { name, population, area, flags } = props.country;

    return (
        <div className='country'>

            {/* <h4>{props.name}</h4>
            <img src={props.flag} alt="" /> */}
            <h4>{name.common}</h4>
            <h5>Area:{ area }</h5>
            <h5>Population:{population}</h5>
            <img src={flags.png} alt="" />
            

        </div>
    );
};

export default Country;
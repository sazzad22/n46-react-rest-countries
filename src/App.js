import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';
import Person from './Components/Person/Person';


function App() {
  return (
    <div className="App">
      
      {/* <LoadCountry></LoadCountry> */}
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

//todo 46-1  load countries using useEffect
/* 
//create load country component
function LoadCountry() {
  
  //5 steps to load data from api
  //1 - declare useState
  //2- import useEffect
  //3- inside useEffect write an anonymous func and a dependancy valuy(empty array []) ,then fetch the data
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data => setCountries(data))

  },[])

  return (
    <div>
      <h2>Visting different contries</h2>
      <h3>Countries:{countries.length}</h3>

      {
        countries.map(country=> <Country name={country.name.common } population={country.population} ></Country>)
      }

    </div>
  )

}

function Country(props) {
  return (
    <div>
      <h4>Name:{props.name}</h4>
      <h5>Population:{props.population}</h5>
    </div>
  )
}

 */

export default App;

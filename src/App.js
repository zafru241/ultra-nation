import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Country from './components/Country/Country';



function App() {
  const [countries, setCountries] = useState([]);
  const [SelectedCountries, setSelectedCountries] = useState([]);
  

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])

  const handleAddcountry = (country) => {
  const newSelectedCountries = [...SelectedCountries, countries];
  setSelectedCountries(newSelectedCountries);
    
}
  
return (
  
    <div className="App">
      
    <h1>Country loaded:{countries.length}</h1>
    <h2>Country added: {SelectedCountries.length}</h2>
    
     


      
    {countries.map(country => <Country country={country} handleAddcountry={handleAddcountry} key={country.alpha3Code}></Country>)}
   
   </div>

  );
}

export default App;

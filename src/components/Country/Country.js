import React from 'react';

const Country = (props) => {
    // console.log(props);
const {name, population, region, flag} = props.country 
const flagStyle ={height:'50px'}
const countryStyle = {border:'1px solid lightgray',margin:'10px', padding:'5px'}
const handleAddcountry = props.handleAddcountry;

    return (
        <div style= {countryStyle}>
            <h2>This is country {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population:{population}</p>
            <p><small>Region:{region}</small></p>
            <button onClick={()=>handleAddcountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;
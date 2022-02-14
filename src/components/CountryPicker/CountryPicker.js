import React,{useEffect,useState} from 'react'
import { FormControl,NativeSelect} from '@material-ui/core';
import { Countries } from '../../API';

const CountryPicker = () => {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
        const data=async()=>{
          const x =await Countries();
          setCountries(x);
        }
        data();

    },[setCountries])
  
  
    return (
    <div>
        <FormControl>
            <NativeSelect>
                <option value='global'>Global</option>
                {countries.map(country=>(
                    <option key={country.iso2} value={country.name}>{country.name}</option>
                ))}
            </NativeSelect>
        </FormControl>
    </div>
  )
}

export default CountryPicker
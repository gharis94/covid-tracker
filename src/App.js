import React from 'react';
import './App.css';
//import CardDisplay from './components/CardDisplay';
import Header from './components/Header';
import {Card} from './components/Card/Card';
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker';

const App=()=> {

  
  return (
    <div className="Ap">
      <Header/>
      <Card/>
      <CountryPicker/>
      <Chart/>
    </div>
   );
}

export default App;

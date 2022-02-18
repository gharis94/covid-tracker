import React from 'react';
import './App.css';
//import CardDisplay from './components/CardDisplay';
import Header from './components/Header';
import {Card} from './components/Card/Card';
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker';
import {ContextProvider} from './contex/GlobalState'

const App=()=> {

  
  return (
    <ContextProvider>
      <Header/>
      <Card/>
      <CountryPicker/>
      <Chart/>
    </ContextProvider>
   );
}

export default App;

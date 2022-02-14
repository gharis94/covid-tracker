import React from 'react';
import './App.css';
//import CardDisplay from './components/CardDisplay';
import Header from './components/Header';
import {Card} from './components/Card';
import Chart from './components/Chart'

const App=()=> {

  
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Chart/>
    </div>
   );
}

export default App;

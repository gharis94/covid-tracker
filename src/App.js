import React,{useEffect,useState} from 'react';
import './App.css';
//import CardDisplay from './components/CardDisplay';
import Header from './components/Header';
import {MainGrid} from './components/MainGrid';
import axios from 'axios';

const App=()=> {
  const [active,setActive]=useState(0);

  useEffect(()=>{
   const options = 'https://api.covidtracking.com/v1/us/current.json'
    const Data = async () => {
     try {
       const rsp = await axios.get(options);
       console.log(rsp.data[0].hospitalized)
       setActive(rsp.data[0].hospitalized);
     } catch (error) {
       console.log('error', error)
     }
   }
   Data();
  },[])
  
  return (
    <div className="App">
      <Header/>
      <MainGrid active={active}/>
      {console.log(active)}
    </div>
   );
}

export default App;

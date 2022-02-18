import React,{createContext,useState,useEffect} from 'react';
import { fetchData,fetchChart,Countries } from '../API';




export const GlobaolContext = createContext();

export const ContextProvider =({children})=>{
    const [confirm,setConfirm]=useState(0);
    const [recovere,setRecovere]=useState(0);
    const [death,setDeath]=useState(0);
    const [dailyData,setdailyData]=useState([])


    useEffect(() => {
        const data = async () => {
            const rsp = await fetchData();
            setDeath(rsp.deaths.value);
            setConfirm(rsp.confirmed.value);
            setRecovere(rsp.recovered.value);
            const rsp2= await fetchChart();
            setdailyData(rsp2);
        }
          data();

    }, [])

    return(
        <GlobaolContext.Provider value={{
            death,
            recovere,
            confirm,
            dailyData
            }
        }>
            {children}
        </GlobaolContext.Provider>
    )
}
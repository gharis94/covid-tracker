import React,{useState,useEffect,useContext} from 'react';
import {Line,Bar} from 'react-chartjs-2';
//import { fetchChart } from '../../API';
import './Chart.css';
import { GlobaolContext } from '../../contex/GlobalState';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const Chart =()=>{
    const {dailyData}=useContext(GlobaolContext) 
    //const [dailyData,setDailyData]=useState([]);

    /*useEffect(()=>{
        const fetchData=async()=>{
            setDailyData(await fetchChart())   
        };
        fetchData();
    },[])*/

    const LineChart = (
        dailyData.length ? (
            <Line 
                data={{
                    labels:dailyData.map(({date})=>date),
                    datasets:[
                        {
                            data:dailyData.map(({confirmed})=>confirmed),
                            label:'Infected',
                            borderColor:'#3333ff',
                            fill:true
                    },{
                            data:dailyData.map(({deaths})=>deaths),
                            label:'Deaths',
                            borderColor:'red',
                            backgroundColor:'rgba(255,0,0,.5)',
                            fill:true
                    }]
                }}
            />
        ):
        null
    )

    return(
        <div className='chart'>
            {LineChart}
        </div>
        
    )
}
export default Chart;
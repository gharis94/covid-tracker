import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData =async()=>{
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdate};
    } catch(error){
        console.log(error)
    }
}

export const fetchChart =async()=>{
    try{
        const {data} =await axios.get(`${url}/daily`);
        const updatedData = data.map(data=>({
                confirmed:data.confirmed.total,
                deaths:data.deaths.total,
                date:data.reportDate
            }
        ))
        return updatedData;
    }catch(error){
        console.log(error);
    }
};

export const Countries =async()=>{
    try{
        const {data : {countries}} = await axios.get(`${url}/countries`);
        console.log(countries)
       // const x = countries.map(country=>{

        //})
        return countries;
    }catch(error){
        console.log(error);
    }
}

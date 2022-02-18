import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
//import { fetchData } from '../../API';
import Grid from '@mui/material/Grid';
import NumberFormat from 'react-number-format';
import { useContext } from 'react';
import { GlobaolContext } from '../../contex/GlobalState';

export  const Card=()=>{
  //const [deaths,setDeaths]=useState(0);
  //const [confirmed,setConfirmed]=useState(0);
 // const [recovered,setRecovered]=useState(0);
  const {recover,death,confirm} = useContext(GlobaolContext);

  /*useEffect(()=>{
    const data = async()=>{
       const rsp=await fetchData();
      setDeaths(rsp.deaths.value);
      setConfirmed(rsp.confirmed.value);
      setRecovered(rsp.recovered.value)
    }
    data();
    
    
  },[])*/
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 200,
        },
      }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Typography variant='h5' gutterBottom>Confirmed</Typography>
            <Typography variant='body1'>
              <NumberFormat value={confirm} displayType='text' thousandSeparator={true}/>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Typography variant='h5' gutterBottom>Recovered</Typography>
            <Typography variant='body1'>
              <NumberFormat value={recover} displayType='text' thousandSeparator={true}/>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Typography variant='h5' gutterBottom>Death</Typography>
            <Typography variant='body1'>
              <NumberFormat value={death} displayType='text' thousandSeparator={true}/>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {GlobalData} from './GlobalData'
/*const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/

export const MainGrid=(props)=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper><GlobalData active={props.active}/></Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper>Country</Paper>
        </Grid>
        
      </Grid>
    </Box>
  );
}

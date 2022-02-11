import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export  const GlobalData=(props)=>{
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
        Global Data
      </Paper>
        <Paper elevation={3}>
            <Typography variant='h5' gutterBottom>Active</Typography>
                <Typography variant='body1'>{props.active}</Typography>
      </Paper>
        <Paper elevation={3}>
            Recovered
      </Paper>
      <Paper elevation={3}>
            Fatalities
      </Paper>
    </Box>
  );
}

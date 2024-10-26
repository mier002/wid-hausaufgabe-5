import React from 'react'
import {Button} from '@mui/material/Button';

function App() {
  return(
    <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello React!
      </Typography>
        MUI-Vorlage
      <Button variant="contained" color="primary">
        Vorlage
      </Button>
    </h1>
  );
}

export default App;

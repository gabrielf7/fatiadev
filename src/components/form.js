import React from 'react';
import { 
  Grid, Button, TextField, Box, makeStyles
} from '@material-ui/core';

//colors
import { 
  blue 
  
} from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  buttonSubmit: {
    backgroundColor: blue['A200'],
    color: 'white',
    boxShadow: '0 0 1em gold',
  },
}));

export default function Form() {
  const classes = useStyles();

  return(
    <div className="form">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <h1>Formulário Cliente</h1>
          </Box>
          <form autoComplete="off">
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <TextField id="outlined-basic" type="text" label="Nome" variant="outlined" required />
            </Box>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <TextField id="outlined-basic" type="email" label="Email" variant="outlined" required />
            </Box>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Button variant="outlined" type="submit" className={classes.buttonSubmit}>
                Confirmar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
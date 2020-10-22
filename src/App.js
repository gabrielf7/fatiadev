import React from 'react';
import Routers from './Router';

import { 
  CssBaseline, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <div className={classes.root}>
        <Routers />
      </div>
    </div>
  );
}

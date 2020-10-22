import React from 'react';
import Routers from './Router';

import { 
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Routers />
      </div>
    </React.Fragment>
  );
}

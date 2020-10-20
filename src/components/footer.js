import React from 'react';

import { 
  makeStyles,
  
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  containerFooter: {
    backgroundColor: '#3f51b5',
    height: '60px',
    marginTop: '30px',
    padding: 0,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  }
  
}));

export default function Footer() {
  const classes = useStyles();

  return(
    <div className="footer">
      <footer className={classes.containerFooter}>
        <h5>Projeto Experimental by: GitHub <a href="https://github.com/gabrielf7">@gabrielf7</a></h5>
      </footer>
    </div>

  );
}
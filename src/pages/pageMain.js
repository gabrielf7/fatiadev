import React from 'react';
import Menu from './../components/menu.js';
import Cards from './../components/cards.js';
import Form from './../components/form.js';
import Footer from './../components/footer.js';

import { 
  CssBaseline, Container, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  
  containerMain: {
    paddingTop: '25px',
  },
  
  containerO2: {
    height: '500px', 
    width: '100%',
    backgroundColor: 'white',
    marginTop: '20px', 
    marginBottom: '20px',
    boxShadow: '0 0 1em gold',
  },
  
}));

export default function PageMain() {
  const classes = useStyles();

  return(
    <div className="pageMain">
      <CssBaseline />
      <div className={classes.root}>
        <Menu />
        <main>
          <Container maxWidth="lg" className={classes.containerMain}>
            <Cards />
            <Container maxWidth="lg" className={classes.containerO2}>
              <Form />
            </Container>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}
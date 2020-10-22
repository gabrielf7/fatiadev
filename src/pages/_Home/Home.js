import React from 'react';
import Menu from './../../components/menu';
import Cards from './../../components/cards';
import Form from './../../components/form';
import Footer from './../../components/footer';

import { 
  Container, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
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

export default function Home() {
  const classes = useStyles();

  return(
    <div>
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
  );
}
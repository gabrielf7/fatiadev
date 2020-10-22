import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import Cardapio from './pages/Cardapio/cardapio';
import Delivery from './pages/Delivery/delivery';

// export const HomeRT = "/";
// export const CardapioRT = "/cardapio";
// export const DeliveryRT = "/cardapio/delivery";

export default function Routers(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
        <Route path={process.env.PUBLIC_URL + '/cardapio'} component={Cardapio} />
        <Route path={process.env.PUBLIC_URL + '/cardapio/delivery'} component={Delivery} />
      </Switch>
    </BrowserRouter>
  );
}
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/_Home/Home';
import Cardapio from './pages/Cardapio/Cardapio';
import Develiry from './pages/Develiry/Develiry';

export const HomeRT = "/";
export const CardapioRT = "/cardapio";
export const DeveliryRT = "/cardapio/develiry";

export default function Routers(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={HomeRT} exact component={Home} />
        <Route path={CardapioRT} component={Cardapio} />
        <Route path={DeveliryRT} component={Develiry} />
      </Switch>
    </BrowserRouter>
  );
}
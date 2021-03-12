import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Minhas páginas
import Apod from './pages/Apod/Apod';
import Desenvolvedores from './pages/Desenvolvedores/Desenvolvedores';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Apod} />
            <Route path="/apod" exact={true} component={Apod} />
            <Route path="/desenvolvedores" exact={true} component={Desenvolvedores} />
            <Route path='*' component={Apod} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



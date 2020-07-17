import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Clientes from './components/Clientes';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/clients" component={Clientes} />
            </Switch>
        </BrowserRouter>
    );
};
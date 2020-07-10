import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DeliveryClient from './components/deliveryClient';
import Wellcome from './components/wellcome';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={DeliveryClient}/>
                <Route path="/home" component={Wellcome}/>
            </Switch>
        </BrowserRouter>
    );
};
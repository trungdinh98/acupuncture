import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing/Landing.js';
import Diseases from './Diseases/Diseases.js';
import Login from './LoginRegister/Login.js';
import Register from './LoginRegister/Register.js';
import Profile from './Users/Profile.js';
import Acupuncture from './Acupuncture/Acupuncture.js';
import Head from './Acupuncture/Head.js';
import Back from './Acupuncture/Back.js';
import Leg from './Acupuncture/Leg.js';

class MainComponent extends React.Component {
    render () {
         return (
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/diseases' component={Diseases}/>
                <Route path='/subdiseases/:id' component={Acupuncture}/>
                <Route path='/head' component={Head}/>
                <Route path='/back' component={Back}/>
                <Route path='/leg' component={Leg}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        )
    }
}

export default MainComponent;

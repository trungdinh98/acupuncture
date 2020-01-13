import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing/Landing';
import Diseases from './Diseases/Diseases.js';
import Login from './LoginRegister/Login.js';
import Register from './LoginRegister/Register.js';
import Profile from './Users/Profile.js';
// import Users from './Users/Users/Users.js';
// import Resources from './Resources/Resources.js';
// import Keys from './Keys/Keys.js';
// import Xterm from './Resources/Xterm';
// import ProjectUsers from './Users/ProjectUsers/ProjectUsers.js';
// import AddUsers from './Users/ProjectUsers/NewUser/AddUsers.js';
// import Logging from './Logging/Logging';
// import LogTerm from './Logging/LogTerm';
// import Commands from './Logging/Commands';

class MainComponent extends React.Component {
    render () {
         return (
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/diseases' component={Diseases}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/profile' component={Profile}/>
                {/*
                <Route path='/users' component={Users}/>
                <Route path='/resources' component={Resources}/>
                <Route path='/keys' component={Keys}/>
                <Route path='/xterm' component={Xterm}/>
                <Route path='/logging' component={Logging}/>
                <Route path='/logTerm' component={LogTerm}/>
                <Route path='/commands' component={Commands}/>
                <Route exact path='/projectUsers/' component={ProjectUsers}/>
                <Route exact path='/projectUsers/add' component={AddUsers}/>
                */}
            </Switch>
        )
    }
}

export default MainComponent;

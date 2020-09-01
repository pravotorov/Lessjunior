import React from 'react';
import './styles/App.css';
import { BrowserRouter, Switch,Router, Route, } from 'react-router-dom';


// =========== Components =========== //
import Login from './components/Login'
import Registration from './components/Registration'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'

const App = (props) => {
  return (
      <BrowserRouter>
        <Switch>
          {/*<Route path="/registration" component={Registration} />*/}
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/profile" component={Profile} />
          {/*<Main>*/}
          {/*  <Switch>*/}
          {/*    <Route exact path="/" component={Search} />*/}
          {/*  </Switch>*/}
          {/*</Main>*/}
          {/* </Route> */}
        </Switch>
      </BrowserRouter>

  );
}

export default App;

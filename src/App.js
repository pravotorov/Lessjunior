import React from 'react';
import './styles/App.css';
import { BrowserRouter, Switch,Router, Route, } from 'react-router-dom';


// =========== Components =========== //
import Login from './components/Login'
import Home from './components/Home/Home'
// import 'semantic-ui-css/semantic.min.css'

function App(props ) {
  return (
      <BrowserRouter>
        <Switch>
          {/*<Route path="/registration" component={Registration} />*/}
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
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

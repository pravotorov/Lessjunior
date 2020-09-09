import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './styles/App.css';

// =========== Components =========== //
import Login from './components/Login'
import Registration from './components/Registration'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
});

const App = (props) => {
  return (
      <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
              {/*<Route path="/registration" component={Registration} />*/}
                <Route exact path="/" component={Home} />
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
      </ApolloProvider>
  );
}

export default App;

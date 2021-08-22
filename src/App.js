import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Coins from './components/Coins';
import Header from './components/Header';
import Details from './components/Details';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/StockAPI/'>
          <Coins />
        </Route>
        <Route path='/details/:id' component={Details}></Route>
      </Switch>
    </div>
  );
};

export default App;

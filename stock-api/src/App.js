import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { loadCoins } from './actions/coinAction';
import Coins from './components/Coins';
import Header from './components/Header';
import Search from './components/Search';
import Details from './components/Details';
import Chart from './components/Chart';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCoins());
  }, [dispatch]);
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Header />

          <Coins />
        </Route>
        <Route path='/details/:id' component={Details}></Route>
      </Switch>
    </div>
  );
};

export default App;

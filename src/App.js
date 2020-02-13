import React from 'react';
import { Switch, Route } from 'react-router-dom';
 
import HomePage from './pages/HomePage/HomePage';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path component={HomePage}/>
          <Route exact path='/shop/hats' component={HatsPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;

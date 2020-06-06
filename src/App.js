import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Summary from './containers/Summary/Summary';
import Nav from './components/Navigation/Navigation';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Nav />
        <Route exact path="/" component={PizzaBuilder} />
        <Route path="/summary" component={Summary} />
        <Route path="/orders" component={Orders} />
      </div>
    );
  }
}

export default App;

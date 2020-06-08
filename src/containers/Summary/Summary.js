import React, { Component } from 'react';
import queryString from 'query-string';

import styles from './Summary.module.css';
import Pizza from '../../components/Pizza/Pizza';
import OrderForm from '../../components/OrderForm/OrderForm';
import Breakline from '../../components/Breakline/Breakline';

class Summary extends Component {
  render() {
    const queries = queryString.parse(this.props.location.search);
    const ingredients = {};
    for (let query in queries) {
      queries[query] === 'true'
        ? (ingredients[query] = true)
        : (ingredients[query] = false);
    }

    return (
      <div className={styles.Summary}>
        <div className={styles.PizzaContainer}>
          <Pizza ingredients={ingredients} />
        </div>
        <div className={styles.PurchaseContainer}>
          <p>Price: {Number(queries.price) + '$'}</p>
          <Breakline />
          <OrderForm />
        </div>
      </div>
    );
  }
}

export default Summary;

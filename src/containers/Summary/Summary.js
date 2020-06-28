import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Summary.module.css';
import Pizza from '../../components/Pizza/Pizza';
import OrderForm from '../../components/OrderForm/OrderForm';
import Breakline from '../../components/Breakline/Breakline';

class Summary extends Component {
  render() {
    return (
      <div className={styles.Summary}>
        <div className={styles.PizzaContainer}>
          <Pizza ingredients={this.props.ingredients} />
        </div>
        <div className={styles.PurchaseContainer}>
          <p>Price: {Number(this.props.price.toFixed(2)) + '$'}</p>
          <Breakline />
          <OrderForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.pizzaBuilder.ingredients,
    price: state.pizzaBuilder.totalPrice,
  };
};

export default connect(mapStateToProps)(Summary);

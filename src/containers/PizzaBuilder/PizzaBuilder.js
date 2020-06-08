import React, { Component } from 'react';

import styles from './PizzaBuilder.module.css';
import Pizza from '../../components/Pizza/Pizza';
import OrderMaker from '../../components/OrderMaker/OrderMaker';
import Backdrop from '../../Layout/UI/Backdrop/Backdrop';
import Modal from '../../Layout/UI/Modal/Modal';

const PRICES = {
  pizzaDough: 6.99,
  cheese: 3.99,
  salami: 4.99,
  olives: 2.99,
  ham: 4.99,
  chicken: 5.99,
};

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      pizzaDough: true,
      cheese: false,
      salami: false,
      olives: false,
      ham: false,
      chicken: false,
    },
    showBackdrop: false,
    price: PRICES.pizzaDough,
  };

  toggleIngredientHandler = (ingredient) => {
    const prevState = { ...this.state };
    const { ingredients } = prevState;
    ingredients[ingredient] = !prevState.ingredients[ingredient];
    this.setState({ ingredients });

    this.changePriceHandler(ingredient);
  };

  changePriceHandler = (ingredient) => {
    this.state.ingredients[ingredient]
      ? this.setState((prevState) => {
          return { price: prevState.price + PRICES[ingredient] };
        })
      : this.setState((prevState) => {
          return { price: prevState.price - PRICES[ingredient] };
        });
  };

  toggleBackdropHandler = () => {
    this.setState((prevState) => {
      return { showBackdrop: !prevState.showBackdrop };
    });
  };

  gotoSummaryHandler = () => {
    const { ingredients } = this.state;
    const entries = Object.entries(ingredients);
    let search = '?';
    for (let entry of entries) {
      search += `${entry[0]}=${entry[1]}&`;
    }

    const { price } = this.state;
    search += `price=${price.toFixed(2)}`;

    this.props.history.push({
      pathname: '/summary',
      search,
    });
  };

  render() {
    let backdrop = null;
    if (this.state.showBackdrop)
      backdrop = (
        <Backdrop toggleBackdrop={this.toggleBackdropHandler}>
          <Modal
            gotoSummary={this.gotoSummaryHandler}
            toggleBackdrop={this.toggleBackdropHandler}
          />
        </Backdrop>
      );

    return (
      <div className={styles.PizzaBuilder}>
        {backdrop}
        <Pizza ingredients={this.state.ingredients} />
        <OrderMaker
          ingredients={this.state.ingredients}
          toggleIngredient={this.toggleIngredientHandler}
          toggleBackdrop={this.toggleBackdropHandler}
          price={this.state.price.toFixed(2)}
        />
      </div>
    );
  }
}

export default PizzaBuilder;

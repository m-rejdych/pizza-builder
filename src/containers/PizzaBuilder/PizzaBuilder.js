import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PizzaBuilder.module.css';
import Pizza from '../../components/Pizza/Pizza';
import OrderMaker from '../../components/OrderMaker/OrderMaker';
import Backdrop from '../../Layout/UI/Backdrop/Backdrop';
import Modal from '../../Layout/UI/Modal/Modal';
import * as actions from '../../store/actions/index';

class PizzaBuilder extends Component {
  state = {
    showBackdrop: false,
  };

  componentDidMount() {
    if (
      Object.keys(this.props.ingredients).some(
        (ingredient) => !this.props.ingredients[ingredient]
      )
    ) {
      this.props.resetIngredients();
    }
  }

  toggleBackdropHandler = () => {
    this.setState((prevState) => {
      return { showBackdrop: !prevState.showBackdrop };
    });
  };

  gotoSummaryHandler = () => {
    this.props.history.push('/summary');
  };

  render() {
    const backdrop = this.state.showBackdrop ? (
      <Backdrop toggleBackdrop={this.toggleBackdropHandler}>
        <Modal
          gotoSummary={this.gotoSummaryHandler}
          toggleBackdrop={this.toggleBackdropHandler}
        />
      </Backdrop>
    ) : null;

    return (
      <div className={styles.PizzaBuilder}>
        {backdrop}
        <Pizza ingredients={this.props.ingredients} />
        <OrderMaker
          ingredients={this.props.ingredients}
          toggleIngredient={this.props.toggleIngredient}
          toggleBackdrop={this.toggleBackdropHandler}
          price={this.props.price.toFixed(2)}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIngredient: (igType) => dispatch(actions.toggleIngredient(igType)),
    resetIngredients: () => dispatch(actions.ingredientsReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);

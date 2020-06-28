import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PizzaBuilder.module.css';
import Pizza from '../../components/Pizza/Pizza';
import OrderMaker from '../../components/OrderMaker/OrderMaker';
import Backdrop from '../../Layout/UI/Backdrop/Backdrop';
import Modal from '../../Layout/UI/Modal/Modal';
import * as actionTypes from '../../store/actions';

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
    ingredients: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIngredient: (igType) =>
      dispatch({ type: actionTypes.TOGGLE_INGREDIENT, igType }),
    resetIngredients: () => dispatch({ type: actionTypes.INGREDIENTS_RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);

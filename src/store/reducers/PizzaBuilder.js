import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const PRICES = {
  pizzaDough: 6.99,
  cheese: 3.99,
  salami: 4.99,
  olives: 2.99,
  ham: 4.99,
  chicken: 5.99,
};

const initialState = {
  ingredients: {
    pizzaDough: true,
    cheese: false,
    salami: false,
    olives: false,
    ham: false,
    chicken: false,
  },
  totalPrice: PRICES.pizzaDough,
};

const toggleIngredient = (state, action) => {
  let newPrice = null;
  state.ingredients[action.igType]
    ? (newPrice = 0 - PRICES[action.igType])
    : (newPrice = PRICES[action.igType]);
  const newIngredients = updateObject(state.ingredients, {
    [action.igType]: !state.ingredients[action.igType],
  });
  return updateObject(state, {
    ingredients: newIngredients,
    totalPrice: state.totalPrice + newPrice,
  });
};

const ingredientsReset = (state, action) => {
  return updateObject(initialState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_INGREDIENT:
      return toggleIngredient(state, action);

    case actionTypes.INGREDIENTS_RESET:
      return ingredientsReset(state, action);

    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from '../actions/actionTypes';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_INGREDIENT:
      let newPrice = null;
      state.ingredients[action.igType]
        ? (newPrice = 0 - PRICES[action.igType])
        : (newPrice = PRICES[action.igType]);
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.igType]: !state.ingredients[action.igType],
        },
        totalPrice: state.totalPrice + newPrice,
      };

    case actionTypes.INGREDIENTS_RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from './actionTypes';

export const toggleIngredient = (igType) => {
  return {
    type: actionTypes.TOGGLE_INGREDIENT,
    igType,
  };
};

export const ingredientsReset = () => {
  return {
    type: actionTypes.INGREDIENTS_RESET,
  };
};

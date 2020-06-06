import React from 'react';

import styles from './Ingredients.module.css';
import Ingredient from './Ingredient/Ingredient';

const ingredients = (props) => {
  const ingredients = [];
  for (let ingredient in props.ingredients) {
    if (props.ingredients[ingredient])
      ingredients.push(<Ingredient key={ingredient} type={ingredient} />);
  }

  return <div className={styles.Ingredients}>{ingredients}</div>;
};

export default ingredients;

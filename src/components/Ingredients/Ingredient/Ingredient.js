import React from 'react';

import styles from './Ingredient.module.css';

const ingredient = (props) => (
  <div className={[styles.Ingredient, styles[props.type]].join(' ')}></div>
);

export default ingredient;

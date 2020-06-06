import React from 'react';

import styles from './Pizza.module.css';
import Ingredietns from '../Ingredients/Ingredients';

const pizza = (props) => (
  <div className={styles.Pizza}>
    <Ingredietns ingredients={props.ingredients} />
  </div>
);

export default pizza;

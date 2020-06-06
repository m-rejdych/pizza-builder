import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
  let ingredients = '';
  for (let ig in props.ingredients) {
    if (props.ingredients[ig] === 'true') ingredients += `${ig}, `;
  }

  return (
    <div className={styles.Order}>
      <p>
        <strong>ID:</strong> {props.id}
      </p>
      <p>
        <strong>Ingredients:</strong> {ingredients.slice(0, -2)}
      </p>
      <p>
        <strong>Price:</strong> {props.price}$
      </p>
    </div>
  );
};

export default order;

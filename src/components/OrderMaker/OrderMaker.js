import React from 'react';

import Button from '../../Layout/UI/Buttons/Buttons';
import styles from './OrderMaker.module.css';
import Breakline from '../Breakline/Breakline';

const orderMaker = (props) => {
  return (
    <div className={styles.Container}>
      <label className={styles.CheckboxHolder}>
        Cheese
        <input
          className={styles.CheckboxInput}
          name="ingredient"
          id="cheese"
          type="checkbox"
          onClick={() => props.toggleIngredient('cheese')}
        />
        <span className={styles.Checkmark}></span>
      </label>
      <label className={styles.CheckboxHolder}>
        Salami
        <input
          className={styles.CheckboxInput}
          name="ingredient"
          id="salami"
          type="checkbox"
          onClick={() => props.toggleIngredient('salami')}
        />
        <span className={styles.Checkmark}></span>
      </label>
      <label className={styles.CheckboxHolder}>
        Olives
        <input
          className={styles.CheckboxInput}
          name="ingredient"
          id="olives"
          type="checkbox"
          onClick={() => props.toggleIngredient('olives')}
        />
        <span className={styles.Checkmark}></span>
      </label>
      <label className={styles.CheckboxHolder}>
        Ham
        <input
          className={styles.CheckboxInput}
          name="ingredient"
          id="ham"
          type="checkbox"
          onClick={() => props.toggleIngredient('ham')}
        />
        <span className={styles.Checkmark}></span>
      </label>
      <label className={styles.CheckboxHolder}>
        Chicken
        <input
          className={styles.CheckboxInput}
          name="ingredient"
          id="chicken"
          type="checkbox"
          onClick={() => props.toggleIngredient('chicken')}
        />
        <span className={styles.Checkmark}></span>
      </label>
      <Breakline />
      <h3>Price: {props.price}$</h3>
      <Breakline />
      <Button clicked={props.toggleBackdrop} color="green">
        ORDER
      </Button>
    </div>
  );
};

export default orderMaker;

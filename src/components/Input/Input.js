import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
  let orderElement = null;
  let invalidityMessage = null;
  let classes = [styles.Input];
  if (props.invalid && props.touched) {
    classes.push(styles.Invalid);
    invalidityMessage = (
      <p className={styles.InvalidityMessage}>
        Please, enter the proper{' '}
        <span className={styles.Capitalize}>{props.id}</span>
      </p>
    );
  }

  switch (props.elementType) {
    case 'input':
      orderElement = (
        <div className={styles.InputContainer}>
          <input
            onChange={props.changed}
            className={classes.join(' ')}
            {...props.config}
            value={props.value}
          />
          {invalidityMessage}
        </div>
      );
      break;

    case 'select':
      orderElement = (
        <select
          onChange={props.changed}
          className={classes.join(' ')}
          value={props.value}
        >
          {props.config.options.map((option) => (
            <option key={option.type} value={option.type}>
              {option.displayType}
            </option>
          ))}
        </select>
      );
      break;

    default:
      orderElement = <input type="text" />;
  }

  return orderElement;
};

export default input;

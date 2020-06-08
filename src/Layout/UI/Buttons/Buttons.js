import React from 'react';

import styles from './Buttons.module.css';

const Button = (props) => {
  const style = [styles.Button];
  if (props.color === 'red') style.push(styles.Red);
  if (props.color === 'green') style.push(styles.Green);
  if (props.disabled) style.push(styles.Disabled);

  return (
    <button
      disabled={props.disabled}
      onClick={props.clicked}
      className={style.join(' ')}
    >
      {props.children}
    </button>
  );
};

export default Button;

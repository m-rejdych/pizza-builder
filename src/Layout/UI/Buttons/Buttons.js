import React from 'react';

import styles from './Buttons.module.css';

const Button = (props) => {
  const style = [styles.Button];
  if (props.color === 'red') style.push(styles.Red);
  if (props.color === 'green') style.push(styles.Green);

  return (
    <button onClick={props.clicked} className={style.join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;

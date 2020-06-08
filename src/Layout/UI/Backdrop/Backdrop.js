import React from 'react';

import styles from './Backdrop.module.css';

const backdrop = (props) => (
  <div onClick={props.toggleBackdrop} className={styles.Backdrop}>
    {props.children}
  </div>
);

export default backdrop;

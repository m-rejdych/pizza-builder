import React from 'react';

import styles from './Modal.module.css';
import Button from '../UI/Buttons/Buttons';

const modal = (props) => (
  <div onClick={props.toggleBackdrop} className={styles.Modal}>
    <h2>The pizza is almost done!</h2>
    <p>Do you want to continue?</p>
    <div className={styles.ButtonsHolder}>
      <Button clicked={props.gotoSummary} color="green">
        ACCEPT
      </Button>
      <Button clicked={props.toggleBackdrop} color="red">
        CANCEL
      </Button>
    </div>
  </div>
);

export default modal;

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const navigation = () => (
  <nav className={styles.Navigation}>
    <ul>
      <li>
        <NavLink
          exact
          activeStyle={{
            color: 'yellow',
            borderBottom: '3px solid yellow',
            textShadow: '0 0.1rem 0.2rem #000',
          }}
          to={'/'}
        >
          Pizza Builder
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            color: 'yellow',
            borderBottom: '3px solid yellow',
            textShadow: '0 0.1rem 0.2rem #000',
          }}
          to={'/orders'}
        >
          Orders
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default navigation;

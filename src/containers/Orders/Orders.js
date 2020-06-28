import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Orders.module.css';
import Order from './Order/Order';
import Spinner from '../../Layout/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    const orders = [];
    for (let order of this.props.orders) {
      orders.push(
        <Order
          key={order.id}
          id={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      );
    }
    let content;
    this.props.loading ? (content = <Spinner />) : (content = orders);

    return <div className={styles.Orders}>{content}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(orders);

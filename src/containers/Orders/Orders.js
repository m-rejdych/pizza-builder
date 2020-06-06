import React, { Component } from 'react';

import styles from './Orders.module.css';
import Order from './Order/Order';
import axios from '../../axiosOrders';
import Spinner from '../../components/Spinner/Spinner';

class orders extends Component {
  state = {
    orders: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get('/orders.json');
      const data = response.data;
      const { orders } = this.state;
      for (let key in data) {
        orders.push({
          id: key,
          ingredients: data[key].ingredients,
          price: data[key].price,
        });
      }
      this.setState({ loading: false, orders });
      console.log(this.state);
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  }

  render() {
    const orders = [];
    for (let order of this.state.orders) {
      orders.push(
        <Order
          key={order.id}
          id={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      );
    }
    console.log(orders);
    let content;
    this.state.loading ? (content = <Spinner />) : (content = orders);

    return <div className={styles.Orders}>{content}</div>;
  }
}

export default orders;

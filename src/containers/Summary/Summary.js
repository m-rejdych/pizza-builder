import React, { Component } from 'react';
import queryString from 'query-string';

import styles from './Summary.module.css';
import Pizza from '../../components/Pizza/Pizza';
import Button from '../../Layout/UI/Buttons/Buttons';
import axios from '../../axiosOrders';
import Spinner from '../../components/Spinner/Spinner';

class Summary extends Component {
  state = {
    loading: false,
  };

  postDataHandler = async () => {
    try {
      this.setState({ loading: true });
      const query = queryString.parse(this.props.location.search);
      const ingredients = { ...query };
      delete ingredients.price;
      const { price } = query;
      const data = {
        ingredients,
        price,
      };
      await axios.post('/orders.json', data);
      this.setState({ loading: false });
      this.props.history.push('/');
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  };

  render() {
    const queries = queryString.parse(this.props.location.search);
    const ingredients = {};
    for (let query in queries) {
      queries[query] === 'true'
        ? (ingredients[query] = true)
        : (ingredients[query] = false);
    }

    let content;
    this.state.loading
      ? (content = <Spinner />)
      : (content = (
          <div className={styles.Summary}>
            <div className={styles.PizzaContainer}>
              <Pizza ingredients={ingredients} />
            </div>
            <div className={styles.PurchaseContainer}>
              <p>Price: {Number(queries.price) + '$'}</p>
              <div className={styles.ButtonsContainer}>
                <Button clicked={this.postDataHandler} color="green">
                  Buy
                </Button>
                <Button clicked={this.props.history.goBack} color="red">
                  Back
                </Button>
              </div>
            </div>
          </div>
        ));

    return content;
  }
}

export default Summary;

import * as actionTypes from './actionTypes';
import axios from '../../axiosOrders';

export const postDataStart = () => {
  return {
    type: actionTypes.POST_DATA_START,
  };
};

export const postDataSucceeded = () => {
  return {
    type: actionTypes.POST_DATA_SUCCEEDED,
  };
};

export const postDataFailed = () => {
  return {
    type: actionTypes.POST_DATA_FAILED,
  };
};

export const postData = (orderForm, ingredients, price) => {
  return async (dispatch) => {
    dispatch(postDataStart());
    try {
      const contactData = {};
      for (let dataType in orderForm) {
        contactData[dataType] = orderForm[dataType].value;
      }

      const data = {
        ingredients,
        price,
        contactData,
      };

      await axios.post('/orders.json', data);
      dispatch(postDataSucceeded());
    } catch (error) {
      dispatch(postDataFailed());
      console.log(error);
    }
  };
};

export const fetchDataStart = () => {
  return {
    type: actionTypes.FETCH_DATA_START,
  };
};

export const fetchDataSucceeded = (orders) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCEEDED,
    orders,
  };
};

export const fetchDataFailed = () => {
  return {
    type: actionTypes.FETCH_DATA_FAILED,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataStart());
    try {
      const response = await axios.get('/orders.json');
      const data = response.data;
      const orders = [];
      for (let key in data) {
        orders.push({
          id: key,
          ingredients: data[key].ingredients,
          price: data[key].price,
        });
      }
      dispatch(fetchDataSucceeded(orders));
    } catch (error) {
      dispatch(fetchDataFailed());
      console.log(error);
    }
  };
};

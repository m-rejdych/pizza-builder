import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
};

const postDataStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const postDataSucceeded = (state, action) => {
  return updateObject(state, { loading: false });
};

const postDataFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchDataStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchDataSucceeded = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchDataFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_START:
      return postDataStart(state, action);

    case actionTypes.POST_DATA_SUCCEEDED:
      return postDataSucceeded(state, action);

    case actionTypes.POST_DATA_FAILED:
      return postDataFailed(state, action);

    case actionTypes.FETCH_DATA_START:
      return fetchDataStart(state, action);

    case actionTypes.FETCH_DATA_SUCCEEDED:
      return fetchDataSucceeded(state, action);

    case actionTypes.FETCH_DATA_FAILED:
      return fetchDataFailed(state, action);

    default:
      return state;
  }
};

export default reducer;

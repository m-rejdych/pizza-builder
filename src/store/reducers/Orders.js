import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.POST_DATA_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.POST_DATA_FAILED:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        lading: true,
      };

    case actionTypes.FETCH_DATA_SUCCEEDED:
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };

    case actionTypes.FETCH_DATA_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

import { Map } from 'immutable';

import {
  GET_PEOPLE_START,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,

  GET_PRODUCT_START,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS
} from 'actions/people';

const initialState = Map({
  loading: false,
  error: null,
  people: null,
  products: null,
  count:0,
  category:null
});

const actionsMap = {
  // Async action
  [GET_PEOPLE_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      people: null,
    }));
  },
  [GET_PEOPLE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_PEOPLE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      people: action.data,
    }));
  },


  [GET_PRODUCT_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      products: null,
    }));
  },

  [GET_PRODUCT_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },

  [GET_PRODUCT_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      products:action.data.data.allproducts,
      count:action.data.data.count,
      category:action.data.data.allCategories
    }));
  },

};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

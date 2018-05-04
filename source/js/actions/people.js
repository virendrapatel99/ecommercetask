export const GET_PEOPLE_START = 'GET_PEOPLE_START';
export const GET_PEOPLE_ERROR = 'GET_PEOPLE_ERROR';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';

export const GET_PRODUCT_START = 'GET_PRODUCT_START';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';


export function getPeople() {
    return {
      type: GET_PEOPLE_START,
    };
}

export function getProducts(options) {
  return {
    type: GET_PRODUCT_START,
    data:options
  };
}

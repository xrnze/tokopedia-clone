import {combineReducers} from 'redux';

import products from './products';
import cart from './cart';
import kurir from './kurir'

const appReducer = combineReducers({
  products: products,
  cart: cart,
  kurir: kurir
})

export default appReducer;

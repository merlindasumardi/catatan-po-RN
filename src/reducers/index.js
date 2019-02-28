import { combineReducers } from 'redux';
import ProductReducer from './product';

const appReducer = combineReducers({
    products: ProductReducer
})

export default appReducer;

import { combineReducers } from 'redux';
import ProductReducer from './product';
import CategoryReducer from './category';
import CustomerReduer from './customer';


const appReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,
    customers: CustomerReduer
})

export default appReducer;

import { combineReducers } from 'redux';
import ProductReducer from './product';
import CategoryReducer from './category';


const appReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,
})

export default appReducer;

import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

export default createStore(reducers, applyMiddleware(ReduxThunk, logger));
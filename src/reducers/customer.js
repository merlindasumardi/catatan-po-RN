import {
    GET_CUSTOMER_REQUEST,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
    ADD_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_FAILURE
} from '../actions/actionTypes';

const initialState = {
    customers: {},
    isFetching: false,
    isFetchingFailed: false,
    addCustomer: {}
};

export default (CustomerReducer = (state = initialState, action) => {
    switch(action.type) {
    case GET_CUSTOMER_REQUEST:
        return {
            ...state,
            isFetching: true,
            isFetchingFailed: false
        };
    
    case GET_CUSTOMER_SUCCESS:
        return {
            ...state,
            isFetching: false,
            isFetchingFailed: false,
            customers: action.payload
        };

    case GET_CUSTOMER_FAILURE:
        return {
            ...state,
            isFetching: false,
            isFetchingFailed: true
        }

    case ADD_CUSTOMER_REQUEST:
        return {
            ...state
        }
    
    case ADD_CUSTOMER_SUCCESS:
        return {
            ...state,
            addCustomer: action.payload
        }

    case ADD_CUSTOMER_FAILURE:
        return {
            ...state,
            addCustomer: action.payload
        }
    
    default:
        return initialState;
    }
});

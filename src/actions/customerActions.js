import axios from 'axios';
import _ from 'lodash';
import {
    URL,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
    GET_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_FAILURE,
    ADD_CUSTOMER_REQUEST
} from './actionTypes';

// - fetch customer
export const getAllCustomers = () => async (dispatch) => {
    dispatch({
        type: GET_CUSTOMER_REQUEST
    });

    try {
        const response = await axios.get(`${URL}/customers`);
        dispatch({
            type: GET_CUSTOMER_SUCCESS,
            payload: _.get(response, 'data')
        });

        return _.get(response, 'data');
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_CUSTOMER_FAILURE,
            payload: error.message
        });
        return error;
    }
}

// - create customer
export const addCustomer = (data = {}) => async (dispatch) => {
    console.log(data);
    dispatch({
        type: ADD_CUSTOMER_REQUEST
    });

    try {
        const response = await axios.post(`${URL}/customers`, data);
        dispatch({
            type: ADD_CUSTOMER_SUCCESS,
            payload: response.data
        });
        return response.data;
    } catch (error) {
        console.log(`error add customer: ${error}`);
        dispatch({
            type: ADD_CUSTOMER_FAILURE,
            payload: error
        });
        return error;
    }
}

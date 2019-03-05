import axios from 'axios';
import _ from 'lodash';
import {
    URL,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
    GET_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_FAILURE,
    ADD_CUSTOMER_REQUEST,
    REMOVE_CUSTOMER_REQUEST,
    REMOVE_CUSTOMER_SUCCESS,
    REMOVE_CUSTOMER_FAILURE
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
    // console.log(data);
    if (!_.isEqual(data.lineId)) {
        _.set(data, 'line', 'yes');
    }
    if (!_.isEqual(data.phoneNumber)) {
        _.set(data, 'whatsapp', 'yes');
    }
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

// - remove customer
export const removeCustomer = (data = {}) => async (dispatch) => {
    dispatch({
        type: REMOVE_CUSTOMER_REQUEST
    });

    try {
        const response = await axios.delete(`${URL}/customers/${data.id}`);
        dispatch({
            type: REMOVE_CUSTOMER_SUCCESS,
            payload: response.data
        });
        return response.data;
    } catch (error) {
        console.log(`error add customer: ${error}`);
        dispatch({
            type: REMOVE_CUSTOMER_FAILURE,
            payload: error
        });
        return error;
    }
}

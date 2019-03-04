import axios from 'axios';
import {
    URL,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
    GET_CUSTOMER_REQUEST
} from './actionTypes';

export const getAllCustomers = () => async (dispatch) => {
    dispatch({
        type: GET_CUSTOMER_REQUEST
    });

    try {
        const response = await axios.get(`${URL}/customers`);

        dispatch({
            type: GET_CUSTOMER_SUCCESS,
            payload: response.data``
        });

        return response.data;
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_CUSTOMER_FAILURE,
            payload: error.message
        });
        return error;
    }
}

import axios from "axios";
import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
} from './actionTypes';

export const getAllProducts = () => async dispatch => {
    dispatch({
        type: GET_PRODUCT_REQUEST
    });
    try{
        const response = await axios.get('http://localhost:3000/products');

        console.log(response);

        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload:response
        });

        return response;
    }
    catch(error) {
        if(error.response) {
            console.log('error', error.response);
        }

        dispatch({
            type: GET_PRODUCT_FAILURE,
            payload:error.response.data.error
        });

        return error.response;
    }
}
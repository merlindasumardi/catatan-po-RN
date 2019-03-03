import axios from "axios";
import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
} from './actionTypes';

export const getAllProducts = () => async (dispatch) => {
    dispatch({
        type: GET_PRODUCT_REQUEST
    });
    
    try{
        const response = await axios.get('https://catatan-po.herokuapp.com/products');

        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload:response.data
        });

        return response.data;
    }
    catch(error) {
        if(error.response) {
            console.log('error get product', error.response);
        }

        dispatch({
            type: GET_PRODUCT_FAILURE,
            payload:error.response.data.error
        });

        return error.response;
    }
}

export const addProduct = (data = {}) => async (dispatch) => {
    console.log(data);
    dispatch({
        type:ADD_PRODUCT_REQUEST
    });

    try{
        const response = await axios.post('https://catatan-po.herokuapp.com/products', data);

        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: response
        });

        return response;

    }catch(error){
        if(error.response){
            console.log('error add product', error.response);
        }

        dispatch({
            type: ADD_PRODUCT_FAILURE,
            payload:error.response.data.error
        });

        return error.response;
    }
}
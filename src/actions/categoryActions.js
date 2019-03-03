import axios from 'axios';
import {
    URL,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE
} from './actionTypes';

export const getCategories = () => async (dispatch) => {
    dispatch({
        type: GET_CATEGORY_REQUEST
    });

    try{
        const response = await axios.get(`${URL}/categories`);

        dispatch({
            type: GET_CATEGORY_SUCCESS,
            payload: response.data,
        });

        return response;
    } catch{
        if(error.response) {
            console.log('error', error.response);
        }

        dispatch({
            type: GET_CATEGORY_FAILURE,
            payload:error.response.data.error
        });

        return error.response;
    }
}
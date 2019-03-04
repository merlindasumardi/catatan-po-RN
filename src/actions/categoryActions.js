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
    } catch (error) {
        console.log(error);

        dispatch({
            type: GET_CATEGORY_FAILURE,
            payload:error.message
        });

        return error.response;
    }
}
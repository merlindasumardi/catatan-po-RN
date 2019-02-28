const initialState = {
    isFetchingProduct: false,
    products: {},
    isFetchingProductFailed: false,
}

export default ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PRODUCT_REQUEST':
            return { ...state, isFetchingProduct: true, isFetchingProductFailed: false};
        case 'GET_PRODUCT_SUCCESS':
            return { ...state, isFetchingProduct: false, product: action.payload, isFetchingProductFailed: false};
        case 'GET_PRODUCT_FAILURE':
            return { ...state, isFetchingProduct: false, isFetchingProductFailed: true};  
        default:
            return initialState;   
    }

};
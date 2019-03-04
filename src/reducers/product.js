const initialState = {
  isFetchingProduct: false,
  products: {},
  isFetchingProductFailed: false,
  isAddingProduct: false,
  isAddProductSuccess: false,
  isAddProductFailed: false,
};

export default (ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return {
        ...state,
        isFetchingProduct: true,
        isFetchingProductFailed: false
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        isFetchingProduct: false,
        products: action.payload,
        isFetchingProductFailed: false
      };
    case "GET_PRODUCT_FAILURE":
      return {
        ...state,
        isFetchingProduct: false,
        isFetchingProductFailed: true
      };
      case "ADD_PRODUCT_REQUEST":
      return {
        ...state,
        isAddingProduct: true,
        isAddingProductFailed: false
      };
    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        isAddingProduct: false,
        isAddProductSuccess: true,
        isAddProductFailed: false
      };
    case "ADD_PRODUCT_FAILURE":
      return {
        ...state,
        isAddingProduct: false,
        isAddProductSuccess: false,
        isAddProductFailed: true
      };
      
    default:
      return initialState;
  }
});

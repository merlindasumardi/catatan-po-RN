const initialState = {
  isFetchingProduct: false,
  products: {},
  isFetchingProductFailed: false,
  isAddingProduct: false,
  isAddProductSuccess: false,
  isAddProductFailed: false,
  isSearchingProduct: false,
  isSearchProductFailed: false,
  isFetchingProductById: false,
  productDetail: {},
  isFetchProductByIdFailed: false
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

    case "GET_PRODUCT_BY_NAME_REQUEST":
      return {
        ...state,
        isSearchingProduct: true,
        isSearchProductFailed: false
      };
    case "GET_PRODUCT_BY_NAME_SUCCESS":
      return {
        ...state,
        isSearchingProduct: false,
        products: action.payload,
        isSearchProductFailed: false
      };
    case "GET_PRODUCT_BY_NAME_FAILURE":
      return {
        ...state,
        isSearchingProduct: false,
        isSearchProductFailed: true
      };
    case "GET_PRODUCT_BY_ID_REQUEST":
      return {
        ...state,
        isFetchingProductById: true,
        isFetchProductByIdFailed: false
      };
    case "GET_PRODUCT_BY_ID_SUCCESS":
      return {
        ...state,
        isFetchingProductById: false,
        productDetail: action.payload,
        isFetchProductByIdFailed: false
      };
    case "GET_PRODUCT_BY_ID_FAILURE":
      return {
        ...state,
        isFetchingProductById: false,
        isFetchProductByIdFailed: true
      };

    default:
      return initialState;
  }
});

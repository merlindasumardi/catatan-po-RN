initialState = {
  isFetching: false,
  categories: {},
  isFetchingFailed: false
};

export default (CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_REQUEST":
      return { ...state, isFetching: true, isFetchingFailed: false };
    case "GET_CATEGORY_SUCCESS":
      return {
        ...state,
        isFetching: false,
        categories: action.payload,
        isFetchingFailed: false
      };
    case "GET_CATEGORY_FAILURE":
      return { ...state, isFetching: false, isFetchingFailed: true };
    default:
      return initialState;
  }
});

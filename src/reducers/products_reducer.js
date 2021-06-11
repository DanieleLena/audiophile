const products_reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {

    console.log(action.payload);
    return { ...state, products: action.payload };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
      console.log("ERRRRRRROR");
      
    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;

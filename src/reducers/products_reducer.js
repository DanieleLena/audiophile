const products_reducer = (state, action) => {

  if (action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
    console.log('LOADING ALL THE PRODUCTS');
    
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
console.log(" ALL THE PRODUCTS SUCCESS");
    console.log(action.payload);
    return { ...state,products_loading: false, products: action.payload };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
      console.log("ERRRRRRROR");
      
    return { ...state };
  }
   if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
     console.log("LOADING SINGLE PRODUCTS");

     return { ...state, single_product_loading: false };
   }
   if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
     const item = state.products.find((item) => {
       return item.slug === action.payload;
     });
console.log('SINGLE PRODUCT SUCCESS');
console.log(item);


     return { ...state, single_product_loading: true, single_product: item };
   }

  
    throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;

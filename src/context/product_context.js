import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./../reducers/products_reducer";

import data from "../data.json"; 

const initialState = {
  products_loading: false,
  products: [],
  single_product_loading: false,
  single_product: {},
  image_url: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);



  const fetchProducts = (data) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const products = data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  const fetchSingleProducts =  (id) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
       dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: id });
    } catch (error) {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
    }
  };

  const getImageUrl = (imageArray) => {
    console.log(imageArray);
    
    // dispatch(type: "GET_IMAGE_URL", payload: imageArray)
    const hostUrl = "https://github.com/DanieleLena/audiophile/blob/master/src";
    let formatRelativePath = "";

    const mobile = window.matchMedia("(min-width: 0px)");
    const tablet = window.matchMedia("(min-width: 768px)");
    const desktop = window.matchMedia("(min-width: 1025px)");
    

    if (desktop.matches) {
      formatRelativePath = imageArray.desktop.slice(1);

      return hostUrl + formatRelativePath + "?raw=true";
    }
    if (tablet.matches) {
      formatRelativePath = imageArray.tablet.slice(1);

      return hostUrl + formatRelativePath + "?raw=true";
    }
    if (mobile.matches) {
      formatRelativePath = imageArray.mobile.slice(1);

      return hostUrl + formatRelativePath + "?raw=true";
    }
  };

  useEffect(() => {
    fetchProducts(data);
  },[]);
 

  return (
    <ProductsContext.Provider value={{ ...state,fetchProducts, getImageUrl,fetchSingleProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

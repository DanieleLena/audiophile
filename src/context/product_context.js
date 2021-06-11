import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./../reducers/products_reducer";

import { data } from "./../data";

const initialState = {
  products_loading: false,
  products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (data) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const products = data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };
  useEffect(() => {
    fetchProducts(data);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./../reducers/products_reducer";

import data from "../data.json"; 

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if(cart) {
    return JSON.parse(localStorage.getItem("cart"));
  }else {
    return []
  }
}
const initialState = {
  products_loading: false,
  products: [],
  single_product_loading: false,
  single_product: {},
  cart: getLocalStorage(),
  total_amount: 0,
  shipping_fee: 5000,
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

  const addToCart = (product, amount) => {
    dispatch({type: "ADD_TO_CART", payload: {product,amount}})
  }
 

  const removeAllToCart = () => {
dispatch({type: "REMOVE_ALL_TO_CART"})

  }
   const toggleAmount = (name, value) => {
     dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { name, value } });
   };

   const getTotal = () => {
     dispatch({type: "GET_TOTAL"})
   }

  const getImageUrl = (imageArray) => {    
    const hostUrl = "https://github.com/DanieleLena/audiophile/blob/master/src";
    let formatRelativePath = "";

    const mobile = window.matchMedia("(min-width: 0px)");
    // const tablet = window.matchMedia("(min-width: 768px)");
    const desktop = window.matchMedia("(min-width: 768px)");
    

    if (desktop.matches) {
      formatRelativePath = imageArray.desktop.slice(1);

      return hostUrl + formatRelativePath + "?raw=true";
    }
    // if (tablet.matches) {
    //   formatRelativePath = imageArray.tablet.slice(1);

    //   return hostUrl + formatRelativePath + "?raw=true";
    // }
    if (mobile.matches) {
      formatRelativePath = imageArray.mobile.slice(1);

      return hostUrl + formatRelativePath + "?raw=true";
    }
  };
  const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number / 100);

    return newNumber;
  };

  useEffect(() => {
    fetchProducts(data);
  },[]);
  useEffect(() => {
   localStorage.setItem("cart",JSON.stringify(state.cart))
  }, [state.cart])
 

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchProducts,
        getImageUrl,
        fetchSingleProducts,
        formatPrice,
        addToCart,
        removeAllToCart,
        toggleAmount,
        getTotal
        
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

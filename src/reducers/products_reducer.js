const products_reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    return { ...state, products_loading: false, products: action.payload };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {

    return { ...state };
  }
  if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {

    return { ...state, single_product_loading: false };
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    const item = state.products.find((item) => {
      return item.slug === action.payload;
    });
    return { ...state, single_product_loading: true, single_product: item };
  }
  if (action.type === "ADD_TO_CART") {
    const { product, amount } = action.payload;
    const { name, price, image } = product;

    const checkItem = state.cart.find((item) => item.name === name);

    if (checkItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.name === name) {
          let newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        name: name,
        price: price,
        images: image,
        amount: amount,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "REMOVE_TO_CART") {
    return { ...state, cart: [...state.cart] };
  }
  if (action.type === "REMOVE_ALL_TO_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { name, value } = action.payload;
  

    const tempCart = state.cart.map((item) => {
      if (item.name === name) {
        if (value === "inc") {
          let newAmount = item.amount + 1;

          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    //remove the item with amount 0
    const newCart = tempCart.filter((item) => {return item.amount > 0});
    
    return { ...state, cart: newCart };
  }
    if (action.type === "GET_TOTAL") {
let totalAmount = 0;

      state.cart.map((item)=> {
        const {amount, price} = item;

        let subtotal = amount * price;
        return totalAmount = totalAmount + subtotal;
      })
      
      return {...state, total_amount: totalAmount} 
    }


  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;

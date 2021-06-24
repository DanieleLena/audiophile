import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/product_context";
import { useEffect } from "react";
import { Counter } from "../components";
import { Link } from "react-router-dom";

const Cart = ({toggleCart}) => {
  const {
    getImageUrl,
    formatPrice,
    cart,
    toggleAmount,
    removeAllToCart,
    getTotal,
    total_amount,
  } = useProductsContext();

  const increase = (name) => {
    toggleAmount(name, "inc");
  };
  const decrease = (name) => {
    toggleAmount(name, "dec");
  };

  const subTotal = (price, amount) => {
    return formatPrice(price * amount);
  };

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, [cart]);

  return (
    <Wrapper>
      <div className="container">
        <div className="cart">
          <div className="title">
            <h2>
              Cart
              <span className="cart-number">({cart.length})</span>
            </h2>
            <button className="remove-btn" onClick={removeAllToCart}>
              Remove All
            </button>
          </div>
          {cart.length > 0 ? (
            <div className="body">
              {cart.map((item, index) => {
                const { name, amount, images, price } = item;

                return (
                  <div className="item" key={index}>
                    <img
                      src={getImageUrl(images)}
                      alt={name}
                      width="200px"
                    ></img>
                    <div className="text">
                      <h5>{name}</h5>
                      <h5 className="price">{subTotal(price, amount)}</h5>
                    </div>
                    <Counter
                      className="counter"
                      amount={amount}
                      increase={() => increase(name)}
                      decrease={() => decrease(name)}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="empty">Your cart is empty</h3>
          )}

          {cart.length > 0 ? (
            <>
              <div className="total">
                <h4>Total:</h4>
                <h3>{formatPrice(total_amount)}</h3>
              </div>
              <Link to="/checkout">
                <button className="checkout-btn" onClick={toggleCart}>
                  checkout
                </button>
              </Link>
            </>
          ) : (
            <Link to="/headphones">
              <button className="checkout-btn" onClick={toggleCart}>
                Go Shopping
              </button>
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 97px; //the navbar height
  left: 0;
  /* overflow: hidden; */
  background-color: rgba(37, 36, 36, 0.507);
  z-index: 998;

  .cart {
    width: 95%;
    max-width: 377px;
    max-height: 80vh;
    overflow-y: scroll;
    padding: 2rem;
    margin: auto;
    margin-top: 2rem;
    background-color: white;
    position: static;
    top: 5vh;
    left: 0;
    /* left: 50%; */
    /* transform: translateX(-100%); */
    border-radius: 10px;
    color: black;
    z-index: 9999;
  }
  .cart::-webkit-scrollbar {
    display: none;
  }
  .cart-number {
    font-size: 1.6rem;
    margin-left: 1rem;
  }
  .remove-btn {
    background: none;
    color: var(--crl-gray);
    margin: 0;
    text-decoration: underline;
    font-weight: 200;
  }
  .title {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 2rem;
    }
  }
  .item {
    height: 100px;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .price {
      color: var(--crl-gray);
      font-weight: 200;
    }
    .text {
      width: 70%;
    }
    img {
      width: 25%;
      height: 100%;
      border-radius: 10px;
      margin-right: 1rem;
    }

    h5 {
      width: 90%;
      font-size: 1.5rem;
      line-height: 1.4rem;
    }
  }
 
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;

    h4 {
      color: var(--crl-gray);
      font-size: 1.5rem;
      font-weight: 200;
    }
    h3 {
      font-size: 2rem;
    }
  }
  .empty {
    margin: 4rem 0;
    font-size: 2rem;
    text-align: center;
  }
  .checkout-btn {
    width: 95%;
  }
  @media (min-width: 768px) {
    .container {
      width: var(--max-widht);
      margin: auto;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
    }
  }
  @media (min-width: 1025px) {
    position: absolute;
    left: 0;
    width: 100%;
    max-width: var(--crl-max-width);

    .cart {
      position: static;
      margin: 0;
      margin-top: 3rem;
    }
  }
`;

export default Cart;

import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/product_context";
import { useState, useEffect } from "react";
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
  }, [cart]);

  return (
    <Wrapper>
      <div className="cart">
        <div className="title">
          <h2>Cart({cart.length})</h2>
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
                  <img src={getImageUrl(images)} alt={name} width="200px"></img>
                  <div className="text">
                    <h5>{name}</h5>
                    <h6>{subTotal(price, amount)}</h6>
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
          <h3>
            Your cart is empty
          </h3>
        )}

        {cart.length > 0 ? (
          <>
            <div className="total">
              <h3>Total:</h3>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 10vh; //the navbar height
  left: 0;
  overflow: hidden;
  background-color: rgba(37, 36, 36, 0.507);
  z-index: 2;
  

  .cart {
    width: 95%;
    max-width: 500px;
    /* height: 50vh; */
    padding: 2rem;
    margin: auto;
    background-color: white;
    position: relative;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    color: black;
    z-index: 9999;
  }
  .remove-btn {
    background: none;
    color: var(--crl-gray);
    margin: 0;
    text-decoration: underline;
  }
  .title {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item {
    height: 100px;
    display: flex;
    align-items: center;
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
  .counter {
    width: 500px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .checkout-btn {
    width: 95%;
  }

  @media (min-width: 768px) {
    .cart {
      right: 0%;
      padding: 5rem;
    }
  }
`;

export default Cart;

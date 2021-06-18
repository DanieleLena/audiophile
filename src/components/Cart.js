import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/product_context";
import { useState } from "react";
import { Counter } from "../components";

const Cart = () => {
  const { getImageUrl, formatPrice, cart, toggleAmount, removeAllToCart } =
    useProductsContext();

  const increase = (name) => {
    toggleAmount(name, "inc");
  };
  const decrease = (name) => {
    toggleAmount(name, "dec");
  };

  const subTotal = (price, amount) => {
    return formatPrice(price * amount);
  };
  console.log(cart.length);

  return (
    <Wrapper>
      <div className="cart">
        <div className="title">
          <h2>Cart({cart.length})</h2>
          <button onClick={removeAllToCart}>Remove All</button>
        </div>
        <div className="body">
          {cart.map((item, index) => {
            console.log(item);

            const { name, amount, images, price } = item;

            return (
              <div className="item" key={index}>
                <img src={getImageUrl(images)} alt={name} width="100px"></img>
                <div className="text">
                  <h5>{name}</h5>
                  <h6>{subTotal(price, amount)}</h6>
                </div>
                <Counter
                  amount={amount}
                  increase={() => increase(name)}
                  decrease={() => decrease(name)}
                />
              </div>
            );
          })}
        </div>
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
  z-index: 99;

  .cart {
    width: 95%;
    height: 50vh;
    padding: 5%;
    margin: auto;
    background-color: white;
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    color: black;
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

    img {
      width: 25%;
      border-radius: 10px;
      margin-right: 1rem;
    }

    h5 {
      font-size: 1.5rem;
      line-height: 1.4rem;
    }
  }
`;

export default Cart;

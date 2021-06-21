import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/product_context";

const CheckoutPage = () => {

    const { cart, getImageUrl, formatPrice, total_amount, shipping_fee } =
      useProductsContext();

  return (
    <Wrapper>
      <form className="checkout" action="submit">
        <div className="title">
          <h1>Checkout</h1>
        </div>
        <p className="overline">billing details</p>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Alexei Ward" />
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" placeholder="alexei@mail.com" />
        <label htmlFor="telephone">Phone Number</label>
        <input type="tel" name="telephone" placeholder="+1 202-555-0136" />

        <p className="overline">shipping info</p>

        <label htmlFor="address">Your Address</label>
        <input type="text" name="address" placeholder="1137 Williams Avenue" />
        <label htmlFor="zip">ZIP Code</label>
        <input type="number" name="zip" placeholder="10001" />
        <label htmlFor="country">Country</label>
        <input type="text" name="country" placeholder="United State" />

        <p className="overline">Payment Details</p>
        <h6>Payments Method</h6>

        <label className="radio" htmlFor="e-money">
          e-Money
          <input type="radio" id="e-money" name="payment" value="e-money" />
        </label>
        <label className="radio" htmlFor="cash">
          Cash on Delivery
          <input type="radio" id="cash" name="payment" value="cash" />
        </label>
        <br></br>
        <label htmlFor="e-money-number">e-Money-Number</label>
        <input type="number" name="e-money-number" placeholder="237584974" />
        <label htmlFor="e-money-PIN">e-Money-PIN</label>
        <input type="number" name="e-money-PIN" placeholder="8574" />
      </form>
      <div className="summary">
        <h2>summary</h2>
        {cart.map((item, index) => {
          const { name, amount, images, price } = item;

          return (
            <div className="item" key={index}>
              <img src={getImageUrl(images)} alt={name} width="200px"></img>
              <div className="text">
                <h5>{name}</h5>
                <h6>{formatPrice(amount * price)}</h6>
              </div>
              <div className="quantity">x{amount}</div>
            </div>
          );
        })}
        <div className="total">
          <div className="line">
            <h5>Total</h5>
            <h4>{formatPrice(total_amount)}</h4>
          </div>
          <div className="line">
            <h5>Shipping</h5>
            <h4>{formatPrice(shipping_fee)}</h4>
          </div>
          <div className="line">
            <h4>Grand Total</h4>
            <h3 className="grand">
              {formatPrice(shipping_fee + total_amount)}
            </h3>
          </div>
        </div>
        <div className="line">
          <button className="btn" type="button">
            Continue &amp; pay
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f2f2f2;
  padding: 5rem 0;
  .checkout,
  .summary {
    width: 95%;
    border-radius: 10px;
    background-color: white;
    padding: 2rem;
    margin: auto;
  }
  .overline {
    text-transform: uppercase;
    font-size: 700;
  }
  .label,
  input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--crl-gray-light);
  }
  input {
    height: 5rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
  }
  label,
  h6 {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2.4rem;
    letter-spacing: 0.13rem;
  }
  .radio {
    height: 5rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid var(--crl-gray-light);
    border-radius: 10px;
    margin-bottom: 2rem;
  }
  .radio input {
    cursor: pointer;
    height: 3rem;
    width: 2rem;
    margin: 2rem;
  }
  .item {
    height: 100px;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
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
  .quantity {
    font-size: 2rem;
    color: var(--crl-gray);
  }
  .line {
    display: flex;
    justify-content: space-between;
  }
  .btn {
    width: 100%;
    padding: 0;
    max-width: 500px;
    margin: 0;
    margin: auto;
  }
  .grand {
    color: var(--crl-primary);
  }

  @media (min-width: 1050px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 auto;
    padding-top: 13vh;
    .checkout {
      width: 70%;
      margin: 0 auto;
      margin-bottom: 5rem;

      max-width: 800px;
    }
    .summary {
      width: 30%;
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;

export default CheckoutPage;

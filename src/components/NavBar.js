import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "./../assets/shared/desktop/logo.svg";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="logo-container">
        <Link to="/"></Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/headphones">Headphones</Link>{" "}
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>{" "}
        </li>
        <li>
          <Link to="/earphones">Earphones</Link>{" "}
        </li>
      </ul>
      <div className="cart-container">
        <AiOutlineShoppingCart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  max-width: var(--max-width);
  margin: 0 auto;
  height: 80px;
  background-color: var(--crl-black);
  color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--crl-gray);

  .logo-container {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position-y: center;
    object-fit: cover;
    width: 33%;
  }

  ul {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2.4rem;
    letter-spacing: 0.13rem;
    text-transform: uppercase;
  }
  li:hover {
    color: var(--crl-primary);
  }
  .cart-container {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2.5rem;
  }
`;

export default NavBar;

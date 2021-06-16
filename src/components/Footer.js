import React from "react";
import styled from "styled-components";
import logo from "./../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
      <div className="logo">
        <img src={logo} alt="logo" />
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
      <div className="text">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p> 
               <p className="copyright">Copyright 2021. All Rights Reserved</p>

      </div>
      
     
      <div className="icon-container">
        <i>
          <AiFillFacebook />
        </i>
        <i>
          <AiOutlineTwitter />
        </i>
        <i>
          <AiOutlineInstagram />
        </i>
      </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  width: 100%;
  background-color: var(--crl-black);

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }
  li {
    color: white;
    margin-bottom: 1.5rem;

    font-size: 1.3rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  li:hover {
    color: var(--crl-primary);
  }
  .text,
  .copyright {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;
    color: var(--crl-gray);
    text-align: center;
  }
  .copyright {
    margin-top: 3rem;
  }

  .icon-container {
    color: white;
    font-size: 4rem;
    padding-bottom: 3rem;

    i {
      padding: 1rem;
      cursor: pointer;
    }
    i:hover {
      color: var(--crl-primary);
    }
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
    align-items: flex-start;

    ul {
      margin-top: 3rem;
      flex-direction: row;
    }
    li {
      margin-right: 1.5rem;
    }
    .text,
    .copyright {
      margin-left: 0;
      max-width: 700px;
      text-align: start;
      width: 100%;
    }
    .icon-container {
      position: relative;
      top: -7rem;
    }
  }
  @media (min-width: 1025px) {
    .footer-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: var(--max-width);
      width: 90%;
      margin: auto;
      max-width: var(--max-width);
    }
    ul {
      justify-content: flex-end;
    }
    li {
      margin-right: 3rem;
    }
    li:nth-child(4) {
      margin-right: 0;
    }

    .icon-container {
      width: 100%;
      position: static;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default Footer;

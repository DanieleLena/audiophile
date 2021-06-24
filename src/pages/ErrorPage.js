import React from 'react'
import styled from 'styled-components';
import { PageTitle } from '../components';
import image404 from "./../assets/404.png";
import {Link} from "react-router-dom";
const ErrorPage = () => {
    return (
      <>
        <PageTitle title="Page not Found" />
        <Wrapper>
          <img src={image404} alt="page not found" />
          <Link to="/">
            <button>Back Home</button>
          </Link>
          <p>
            <a href="https://pngtree.com/so/web-page">
              web page png from pngtree.com
            </a>
          </p>
        </Wrapper>
      </>
    );
}
const Wrapper = styled.section`
  width: 100%;
  background-color: wheat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: none;
  z-index: 0;

  img {
    width: 30%;
    position: relative;
    left: 2%;
  }
  button {
    margin-bottom: 5rem;
  }
  p {
    position: absolute;
    bottom: 0%;
    font-size: 0.8rem;
  }
`;

export default ErrorPage

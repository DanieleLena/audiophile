import React from 'react'
import styled from 'styled-components';
import { PageTitle } from '../components';
import image404 from "./../assets/404.png";
import {Link} from "react-router-dom";
const ErrorPage = () => {
    return (
      <>
    <PageTitle title="Page not Found"/>
      <Wrapper>
                 <img src={image404} alt="page not found"/>
                <Link to="/"><button>Back Home</button></Link> 
      </Wrapper>
      </>
    );
}
const Wrapper = styled.section`
width: 100vw;
height: 100vh;
background-color: wheat;
display: flex;
flex-direction: column;
justify-content:flex-start ;
align-items: center;

img {
  width: 30%;
  position: relative;
  left: 2%;
}
`

export default ErrorPage

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroImageMobile from "./../assets/home/mobile/image-header.jpg";
import heroImageTablet from "./../assets/home/tablet/image-header.jpg";
import heroImageDesktop from "./../assets/home/desktop/image-hero.jpg";
const Hero = () => {
  return (
    <Wrapper>
      
        <div className="hero-text">
          <p className="new-product"> New product</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p>
            Experience natural, lifelike audio and exceptional build<br></br>{" "}
            quality made for the passionate music enthusiast.
          </p>
          <Link to="/headphones/xx99-mark-two-headphones">
            <button>see product</button>
          </Link>
        </div>
        <div className="hero-image"></div>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`

height: 80vh;
display: flex;
justify-content: center;
align-items: center;

  .hero-text {
    
    width: 80%;
    text-align: center;
    z-index: 0;

    color: white;
    p {
      color: var(--crl-gray);
    }
  }
  .new-product {
    text-transform: uppercase;
    font-size: 2.3rem;
    letter-spacing: 0.5rem;
    color: var(--crl-gray);
  }

  .hero-image {
    position: absolute;
    top: 10vh;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 80vh;
    background-image: url(${heroImageMobile});
    object-fit: fill;
    background-position: -50px -110px;
    background-size: 120%;
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) {
    .hero-text {
     
      width: 50%;
    }
    .new-product {
      letter-spacing: 1.3rem;
    }
    .hero-image {
      background-image: url(${heroImageTablet});

      background-position-x: -50px;
    }
  }

  @media (min-width: 1025px) {

    justify-content: left;
    align-items: center;
    /* height: 800px; */

    .hero-text {
      
      width: 40%;
      text-align: left;
    }
    .hero-image {
      width: 100%;
      height: 100vh;
      max-width: 2000px;
      margin:auto;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${heroImageDesktop});
    }
  }
  
`;
export default Hero;

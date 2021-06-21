import React from "react";
import styled from "styled-components";
import heroImageMobile from "./../assets/home/mobile/image-header.jpg";
import heroImageTablet from "./../assets/home/tablet/image-header.jpg";
import heroImageDesktop from "./../assets/home/desktop/image-hero.jpg";
const Hero = () => {
  return (
    <Wrapper>
        <div className="hero-container">

        
      <div className="hero-text">
        <p className="new-product"> New product</p>
        <h1>XX99 Mark II HeadphoneS</h1>
        <p>
          Experience natural, lifelike audio and exceptional build<br></br> quality made
          for the passionate music enthusiast.
        </p>
        <button>see product</button>
      </div>
      <div className="hero-image">
      </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.hero-container {
  
  height: 70vh;
  margin-bottom: 2rem;
}
  .hero-text {
    position: absolute;
    top: 25vh;
    width: 80%;
    text-align: center;
    z-index: 0;

    color: white;
    p {
      margin: 1.5rem 0;
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
    background-position: -10px -100px;
    background-size: 110%;
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) {
    .hero-text {
      position: static;
      transform: translateY(50%) translateX(50%);
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
    .hero-container{
      
          height: 100vh;

    }

    .hero-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;

   text-align: left;
    }
    .hero-image {
      width: 100%;
      height: 100vh;
     position: absolute;
     top: 0;
     left: 0;
      background-image: url(${heroImageDesktop});
      
    }
  }
`;
export default Hero;

import React from 'react'
import styled from 'styled-components'
import imgD from "../assets/shared/desktop/image-best-gear.jpg";
import imgT from "../assets/shared/tablet/image-best-gear.jpg";
import imgM from "../assets/shared/mobile/image-best-gear.jpg";


const Signature = () => {
    return (
      <Wrapper>
        <div className="img-container"></div>
        <div className="text">
          <h1>
            Bringing you the <span>best</span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.article`
  
  .img-container {
    width: 100%;
    height: 30vh;
    background-image: url(${imgM});
    background-size: cover;
    margin-bottom: 2rem;
  }

  span {
    color: var(--crl-primary);
  }
  h1 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    .img-container {
      width: 100%;
      background-image: url(${imgT});
    }
  }
  @media (min-width: 1025px) {
    margin-top: 5rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 5rem;

    .img-container {
      width: 50%;
      height: 588px;
      background-image: url(${imgD});
      background-size: auto auto;
      border-radius: 10px;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40%;
      margin-right: 3rem;
    }
  }
`;

export default Signature

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import headphoneImg from "./../assets/shared/desktop/image-headphones.png";
import speakerImg from "./../assets/shared/desktop/image-speakers.png";
import earphoneImg from "./../assets/shared/desktop/image-earphones.png";

import { MdKeyboardArrowRight } from "react-icons/md";

const ThreeProductsGallery = () => {
  return (
    <Wrapper>
      <Link to="/headphones">
        <div className="product-box">
          <div className="text">
            <h6>headphones</h6>
            <button className="btn-arrow">
              SHOP
              <i>
                <MdKeyboardArrowRight />
              </i>
            </button>
          </div>
        </div>
      </Link>
      <Link to="/speakers">
        <div className="product-box speakers">
          <div className="text">
            <h6>speakers</h6>
            <button className="btn-arrow">
              SHOP
              <i>
                <MdKeyboardArrowRight />
              </i>
            </button>
          </div>
        </div>
      </Link>
      <Link to="/earphones">
        <div className="product-box earphones">
          <div className="text">
            <h6>earphones</h6>
            <button className="btn-arrow">
              SHOP
              <i>
                <MdKeyboardArrowRight />
              </i>
            </button>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  padding-top: 10vw;

  .product-box {
    width: 100%;
    height: 28vh;
    background-color: var(--crl-gray-light);
    border-radius: 10px;
    margin-bottom: 10vh;
    position: relative;
  }

  .product-box::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    /* background-color: red; */
    background-image: url(${headphoneImg});
    object-fit: fill;
    background-size: 70%;
    background-position: center center;
    background-repeat: no-repeat;
    top: -30%;
  }
  .speakers::after {
    background-image: url(${speakerImg});
  }
  .earphones::after {
    background-image: url(${earphoneImg});
  }

  .text {
    text-align: center;
    width: 100%;
    position: relative;
    top: 65%;

    h6 {
      line-height: 1rem;
    }
    i {
      position: relative;
      top: 8px;
      font-size: 2.5rem;
      color: var(--crl-primary);
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    .product-box {
      width: 25vw;
      margin: 1rem;
    }
    .product-box::after {
      margin: 1rem;
      height: 40vh;
      top: -60%;
    }
  }
`;

export default ThreeProductsGallery;

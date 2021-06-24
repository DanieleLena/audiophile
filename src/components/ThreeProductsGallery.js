import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import headphoneImg from "./../assets/shared/desktop/image-headphones.png";
import speakerImg from "./../assets/shared/desktop/image-speakers.png";
import earphoneImg from "./../assets/shared/desktop/image-earphones.png";

import { MdKeyboardArrowRight } from "react-icons/md";

const ThreeProductsGallery = () => {

 const [boxActive, setBoxActive] = useState(false);
 const [boxActive2, setBoxActive2] = useState(false);
 const [boxActive3, setBoxActive3] = useState(false);


  // const boxOverEffect = () => {

  // }
 
  return (
    <Wrapper>
      <Link to="/headphones">
        <div className="product-box" onMouseEnter={()=>setBoxActive(true)} onMouseLeave={()=>setBoxActive(false)}>
          <div className={`image ${boxActive && "active"}`}></div>
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
        <div className="product-box" onMouseEnter={()=>setBoxActive2(true)} onMouseLeave={()=>setBoxActive2(false)}>
          <div className={`image speakers ${boxActive2 && "active"}`}></div>
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
        <div className="product-box" onMouseEnter={()=>setBoxActive3(true)} onMouseLeave={()=>setBoxActive3(false)}>
          <div className={`image earphones ${boxActive3 && "active"}`}></div>
          <div className="text">
            <h5>earphones</h5>
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
  .product-box {
    width: 90%;
    max-width: 400px;
    height: 165px;
    margin: auto;
    background-color: var(--crl-gray-light);
    border-radius: 10px;
    margin-bottom: 80px;
    position: relative;
    z-index: 1;
  }

  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${headphoneImg});
    object-fit: fill;
    background-size: 150px;
    background-position: center center;
    background-repeat: no-repeat;
    top: -30%;
    transition: transform 0.3s ease-in-out;
  }
  .speakers {
    background-image: url(${speakerImg});
  }
  .earphones {
    background-image: url(${earphoneImg});
  }
  .active {
    transform: translateY(-20%);
  }

  .text {
    text-align: center;
    width: 100%;
    position: relative;
    top: 50%;

    h6,
    h5 {
      margin-bottom: 0;
    }
    i {
      position: relative;
      top: 8px;
      font-size: 2.5rem;
      color: var(--crl-primary);
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
    a {
      width: 30%;
    }

    .product-box {
      width: 100%;
      max-width: 4000px;
      margin: 1rem;
      height: 204px;
    }
  }
  @media (min-width: 1025px) {
    width: 100%;
    margin-top: 20rem;
    max-width: var(--max-width);

    .image {
      background-size: 200px;
    }
  }
`;

export default ThreeProductsGallery;

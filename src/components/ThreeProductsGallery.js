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
  width: 90%;
  margin: auto;

  .product-box {
    width: 100%;
    height: 28vh;
    background-color: var(--crl-gray-light);
    border-radius: 10px;
    margin-bottom: 10vh;
    position: relative;
  }

  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${headphoneImg});
    object-fit: fill;
    background-size: 60%;
    background-position: center center;
    background-repeat: no-repeat;
    top: -30%;
    transition: transform .3s ease-in-out;
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
    margin-bottom: 5rem;

    .product-box {
      width: 25vw;
      max-width: 400px;
      margin: 1rem;
    }
    .product-box::after {
      margin: 1rem;
      height: 40vh;
      top: -60%;
    }
  }
  @media (min-width: 1025px) {
    width: 100%;
    margin-top: 20rem;
    max-width: var(--max-width);
  }
`;

export default ThreeProductsGallery;

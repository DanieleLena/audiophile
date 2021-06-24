import React from "react";
import styled from "styled-components";
import speakerImg from "../assets/home/desktop/image-speaker-zx9.png";
import speakerSVG from "../assets/home/desktop/pattern-circles.svg";
import grayImgMobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import grayImg from "../assets/home/desktop/image-speaker-zx7.jpg";
import earphoneImg from "../assets/home/desktop/image-earphones-yx1.jpg"
import { Link } from "react-router-dom";


const HomeBanners = () => {
  return (
    <Wrapper>
      <article className="orange">
        <div className="orange-text">
          <h1>ZX9 <br></br>SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/speakers/zx9-speaker">
            <button>see product</button>
          </Link>
        </div>
      </article>

      <article className="gray">
        <div className="gray-text">
          <h1>ZX7 SPEAKER</h1>
          <Link to="/speakers/zx7-speaker">
            <button className="white-btn">see product</button>
          </Link>
        </div>
      </article>

      <article className="earphones">
        <div className="image-side"></div>
        <div className="text-side">
          <h1>YX1 EARPHONES</h1>
          <Link to="/earphones/yx1-earphones">
            <button className="white-btn">see product</button>
          </Link>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .orange {
    width: 100%;
    height: 80vh;
    background-color: var(--crl-primary);
    padding: 2rem;
    border-radius: 10px;
    background-image: url(${speakerSVG});
    background-size: 165%;
    background-position: 45%;
    background-position-y: -120px;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;
    margin-bottom: 4.6rem;
  }
  .orange::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${speakerImg});
    background-position: 50% 10%;
    background-size: 50%;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
  }
  .orange-text {
    position: relative;
    top: 55%;
    text-align: center;
    z-index: 99;

    h1,
    p {
      color: white;
    }
    button {
      background-color: black;
      margin: 0;
      margin-bottom: 3rem;
    }
    button:hover {
      background-color: white;
      color: black;
    }
  }

  .gray {
    width: 100%;
    height: 35vh;
    background-image: url(${grayImgMobile});
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 4.6rem;
  }
  .gray-text {
    position: relative;
    top: 30%;
    width: 50%;
    h1 {
      font-size: 2.7rem;
    }
  }
  .white-btn {
    background-color: transparent;
    border: 2px solid black;
    color: black;
    margin-left: 0;
  }
  .white-btn:hover {
    background-color: black;
    color: white;
  }

  .image-side {
    width: 100%;
    height: 30vh;
    background-image: url(${earphoneImg});
    background-position: center center;
    border-radius: 10px;
    margin-bottom: 2rem;
  }
  .text-side {
    width: 100%;
    border-radius: 10px;
    background-color: var(--crl-gray-light);
    padding: 2rem;
    margin-bottom: 2rem;
    h1 {
      font-size: 2.7rem;
    }
  }

  @media (min-width: 768px) {
    .orange {
      height: 55vh;

      background-position-y: -220px;
      background-size: 100%;
    }
    .orange::after {
      background-position: 50% 10%;
      background-size: 30%;
    }
    .orange-text {
      p {
        margin: auto;
        width: 50%;
        margin-bottom: 2rem;
      }
    }

    .earphones {
      display: flex;
      gap: 1rem;
    }
  }

  @media (min-width: 1025px) {
    .orange {
      height: 560px;
      background-position: -180% 0%;
      background-size: 90%;
      max-height: 500px;
    }
    .orange::after {
      background-position: 20% 110%;
      background-size: 34%;
    }
    .orange-text {
      position: relative;
      top: 25%;
      left: 60%;
      text-align: start;
      width: 30%;

      p {
        width: 100%;
      }
    }

    .gray {
      height: 45vh;
      max-height: 350px;
      background-image: url(${grayImg});
    }
    .gray-text {
      left: 10%;
    }
    .image-side {
      background-position: fill;
      margin-right: 2.7rem;
    }
    .text-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default HomeBanners;

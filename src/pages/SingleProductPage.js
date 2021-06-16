import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/product_context";
import { ThreeproductsGallery, Signature, ProductDetails } from "../components";
import data from "../data.json";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    products,
    single_product,
    single_product_loading,
    fetchSingleProducts,
    getImageUrl,
  } = useProductsContext();

  useEffect(() => {
    console.log("inside use effect");
    if (products.length > 1) {
      fetchSingleProducts(id);
    }
  }, [products]);

  if (!single_product_loading) {
    return (
      <Wrapper>
        <h2>L O A D I N G . . .</h2>
      </Wrapper>
    );
  }

  console.log(single_product);
  const {
    name,
    image,
    category,
    features,
    description,
    includes,
    price,
    gallery: { first, second, third },
  } = single_product;

  return (
    <Wrapper>
      <Link className="goBack" to={`/${category}`}>
        Go back
      </Link>
      <article className="topDescription">
        <img className="productImg" src={getImageUrl(image)} alt={name} />
        <div className="rightSide">
          {single_product.new && <p className="sub-title">New Product</p>}
          <h1>{name}</h1>
          <p>{description}</p>
          <h3>{price}</h3>
          <div className="buttons">
            <div className="counter">
              <button className="minus">-</button>
              <div className="display">1</div>
              <button className="plus">+</button>
            </div>
            <button className="addToCart">Add to cart</button>
          </div>
        </div>
      </article>
      <div className="bottomDescription">
        <div className="features">
          <h2>Features</h2>
          <p>{features}</p>
        </div>
        <div className="inTheBox">
          <h2>In the box</h2>
          <ul>
            {includes.map((i, index) => {
              const { quantity, item } = i;
              return (
                <li key={index}>
                  <span>{quantity}x</span>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="gallery">
        <img
          className="imgGallery"
          src={getImageUrl(first)}
          alt="gallery"
        ></img>
        <img
          className="imgGallery"
          src={getImageUrl(second)}
          alt="gallery"
        ></img>
        <img
          className="imgGallery"
          src={getImageUrl(third)}
          alt="gallery"
        ></img>
      </div>
      <ThreeproductsGallery />
      <Signature />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 90%;
  margin: auto;
  .goBack {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--crl-gray);
  }
  img {
    max-width: 100%;
    margin-bottom: 2rem;
  }
  .buttons {
    width: 100%;
    display: flex;
    margin-bottom: 3rem;
  }
  .counter {
    width: 50%;
    display: flex;
  }
  .minus,
  .plus,
  .display {
    background-color: var(--crl-gray-light);
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 2rem;
    margin: 0;
    text-align: center;
    font-family: "Manrope", sans-serif;
  }
  li {
    font-size: 2rem;
    color: var(--crl-gray);
    margin-bottom: 1rem;
  }
  span {
    color: var(--crl-primary);
    margin-right: 2rem;
  }
  ul,
  .gallery {
    margin-bottom: 5rem;
  }

  @media (min-width: 768px) {
    padding-top: 15vh;
    .topDescription {
      display: flex;
    }

    .rightSide {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .productImg {
      max-width: 50%;
      margin-right: 3rem;
      border-radius: 10px;
    }
    .gallery {
      display: grid;
      width: 100%;
      height: 500px;
      grid-template-columns: 1.5fr 0.5fr;
      grid-template-rows: 1fr 1fr;

      gap: 2rem;
    }
    .imgGallery {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .imgGallery:nth-child(2) {
      grid-column: 1/2;
      grid-row: 1/3;
    }
  }
  @media (min-width: 1025px) {
    .bottomDescription {
      display: flex;
    }
    .features {
      width: 60%;
      margin-right: 10rem;
    }

    .counter {
      max-width: 200px;
    }
  }
`;

export default SingleProductPage;

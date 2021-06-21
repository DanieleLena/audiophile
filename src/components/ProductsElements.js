import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/product_context";
import { Link } from "react-router-dom";

const ProductsElements = ({ category }) => {
  const { products,getImageUrl } = useProductsContext();


  // Select only the products for the same category
  const productForCategory = products.filter(
    (item) => item.category === category
  );
  // Put at the top of the array the "new product"  item
  productForCategory.forEach(function (item, i) {
    if (item.new === true) {
      productForCategory.splice(i, 1);
      productForCategory.unshift(item);
    }
  });

  

  return (
    <Wrapper>
      {productForCategory.map((item) => {
        const {
          id,
          name,
          image,
          category,
          slug,
          description,
        } = item;
         return (
          <article className="product-card" key={id}>
            <div className="image-container">
              <img src={getImageUrl(image)} alt={name} />
            </div>
            <div className="text">
              {item.new && <p className="sub-title">New Product</p>}
              <h1>{name}</h1>
              <p>{description}</p>
              <Link to={`/${category}/${slug}`}>
                <button>SEE PRODUCT</button>
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-card {
    margin-bottom: 5rem;
  }
  .image-container {
    border-radius: 10px;
    text-align: center;
    img {
      max-width: 100%;
      margin-bottom: 2rem;
    }
  }
  .text {
    text-align: center;
    h1,
    p,
    button {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1025px) {
    .product-card {
      margin-top: 5rem;
      display: flex;
      justify-content: space-between;
    }
    .product-card:nth-child(even) {
      flex-direction: row-reverse;
    }
    .text {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: left;

      button {
        margin: 0;
      }
    }
    .image-container {
      width: 45%;
    }
  }
`;

export default ProductsElements;

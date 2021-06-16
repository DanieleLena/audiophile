import React from "react";
import styled from "styled-components";
import {Hero, ThreeproductsGallery,Signature} from "./../components"

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <ThreeproductsGallery/>
      <Signature />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 90%;
  margin: 0 auto;
  
`;

export default HomePage;

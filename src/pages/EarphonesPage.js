import React from "react";
import styled from "styled-components";
import { PageTitle,ProductsElements,ThreeproductsGallery,Signature } from "./../components";

const EarphonesPage = () => {

  return (
    <>
      <PageTitle title="earphones" />;
      <Wrapper className="pagination">
        <ProductsElements category="earphones" />
        <ThreeproductsGallery/>
        <Signature/>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`

`
export default EarphonesPage;

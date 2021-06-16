import React from 'react';
import styled from 'styled-components';
import {PageTitle, ProductsElements,Signature,ThreeproductsGallery} from "./../components"

const HeadphonesPage = () => {
    return (
      <>
        <PageTitle title="headphones" />
        <Wrapper className="pagination">
          <ProductsElements category="headphones" />
          <ThreeproductsGallery />
          <Signature />
        </Wrapper>
      </>
    );
}
const Wrapper = styled.main`


`

export default HeadphonesPage

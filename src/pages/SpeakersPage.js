import React from 'react';
import {PageTitle,ProductsElements,ThreeproductsGallery,Signature} from "./../components";
import styled from "styled-components";




const SpeakersPage = () => {
     return (
       <>
         <PageTitle title="speakers" />;
         <Wrapper className="pagination">
           <ProductsElements category="speakers" />
           <ThreeproductsGallery/>
           <Signature />
         </Wrapper>
       </>
     );
};

const Wrapper = styled.main``


export default SpeakersPage

import React from 'react';
import {PageTitle,ProductsElements} from "./../components";
import styled from "styled-components";




const SpeakersPage = () => {
     return (
         <>
   <PageTitle title="speakers" />;
   <Wrapper>
     <ProductsElements category="speakers" />
   </Wrapper>
 </>)
};

const Wrapper = styled.main``


export default SpeakersPage

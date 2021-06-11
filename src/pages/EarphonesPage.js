import React from "react";
import styled from "styled-components";
import { PageTitle,ProductsElements } from "./../components";

const EarphonesPage = () => {

  return (<>
   <PageTitle title="earphones" />;
   <Wrapper>
     <ProductsElements category="earphones" />
   </Wrapper>
 </>)
};

const Wrapper = styled.main`

`
export default EarphonesPage;

import React from 'react';
import styled from 'styled-components';
import {PageTitle, ProductsElements} from "./../components"

const HeadphonesPage = () => {
    return (
<Wrapper>
       <PageTitle title="headphones"/>
       <ProductsElements category="headphones"/>
       </Wrapper>
    )
}
const Wrapper = styled.main`
`

export default HeadphonesPage

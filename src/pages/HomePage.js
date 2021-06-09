import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
    return (
        <Wrapper>
            
        <div>
            <h1>This is Home Page</h1>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
width: 100%;
height: 100vh;
background-color: var(--crl-black);
`

export default HomePage

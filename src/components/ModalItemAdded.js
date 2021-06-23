import React from 'react'
import styled from 'styled-components'
import {AiFillCheckCircle} from "react-icons/ai"

const ModalItemAdded = () => {
    return (
       <Wrapper>
           <span className="check"><AiFillCheckCircle/></span>

           <h3>Item added to the cart</h3>
       </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100vw;
height: 50px;
background-color: var(--crl-black);
position: fixed;
top: 0vh;
left: 0;
color: white;
display: flex;
justify-content: center;
align-items:center;
h3{
    margin:0;
}
.check {
    color: green;
    font-size: 3rem;
}
.active {
    display: static;
}
`

export default ModalItemAdded

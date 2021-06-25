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
  width: 20vw;
  min-width: 300px;
  height: 50px;
  background-color: white;
  position: fixed;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.34);
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }
  .check {
    color: var(--crl-primary);
    font-size: 3rem;
  }
  .active {
    display: static;
  }
`;

export default ModalItemAdded

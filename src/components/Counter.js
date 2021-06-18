import React from 'react'
import styled from 'styled-components'

const Counter = ({amount,decrease,increase}) => {
    
    return (
      <Wrapper>
        <button className="minus" onClick={decrease}>
          -
        </button>
        <div className="display">{amount}</div>
        <button className="plus" onClick={increase}>
          +
        </button>
      </Wrapper>
    );
}
const Wrapper = styled.div`

    width: 50%;
    display: flex;
    max-width: 200px;
  
  .minus,
  .plus,
  .display {
    background-color: var(--crl-gray-light);
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 2rem;
    margin: 0;
    text-align: center;
    font-family: "Manrope", sans-serif;
  }
  .minus:hover,
  .plus:hover {
    background-color: var(--crl-gray);
  }
`;

export default Counter

import React from "react";
import styled from "styled-components";

const PageTitle = ({ title }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 13vh;
  padding: 5vh;

  background-color: var(--crl-black);
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    height: 15vh;
    padding: 5vh;
  }
  @media (min-width: 1366px) {
    padding-top: 17vh;
    height: 30vh;
    max-height: 300px;
  }
`;

export default PageTitle;

import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MobileMenu = ({toggleMenu}) => {
    return (
        <Wrapper>
            
    <ul className="mobile">
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/headphones" onClick={toggleMenu}>Headphones</Link>{" "}
          </li>
          <li>
            <Link to="/speakers" onClick={toggleMenu}>Speakers</Link>{" "}
          </li>
          <li>
            <Link to="/earphones" onClick={toggleMenu}>Earphones</Link>{" "}
          </li>
        </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background-color: var(--crl-black);
z-index: 997;
top:10vh;
left: 0;
padding: 2.5rem;

.mobile {
    width: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
}
li {
    color: white;
    font-size: 2rem;
    margin-bottom: 2rem;

}
`

export default MobileMenu

import React from 'react';
import styled from 'styled-components';
import LogoWhite from '../images/master-logo_white.png';


function Header() {
  return (
    <Container>
      <Logo src={LogoWhite} />
      <Option>The Hotel</Option>
      <Option>Photos</Option>
      <Option>Accommodations</Option>
      <Option>Promotions</Option>
      <Option>Location</Option>
      <Option>Gastronomy</Option>
      <Option>Events</Option>
      <Book>Book</Book>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: uppercase;
    gap: 1rem;
    background-image: linear-gradient(rgb(111, 111, 111) 50%,  transparent);
    position: fixed;
    width: 100vw;
    color: white;
    padding-top: 0.5rem;
    z-index: 10;
`

const Logo = styled.img`
    width: 120px;
    margin-right: 2rem;
    margin-left: 2rem;
`

const Option = styled.a`
    :hover {
        cursor: pointer;
        color: deeppink;
    }
`

const Book = styled.button`
    width: 6rem;
    height: 2rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 600;
    background: rgba(111, 111, 111, 0.5);
    border: 1px solid white;
    cursor: pointer;
    color: white;
`
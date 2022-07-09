import React from 'react';
import styled from 'styled-components';
import LogoWhite from '../images/master-logo_white.png';
import { useState } from 'react'


function Header() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Container>
      <a href="#" id="click">
        <Logo src={LogoWhite} />
      </a>
      <a href="#about" id="click" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
      <Option>The Hotel</Option>
      </a>
      <a href="#photos" id="click" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
      <Option>Photos</Option>
      </a>
      <a href="#accommodations" id="click" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
      <Option>Accommodations</Option>
      </a>
      <a href="#gastronomy" id="click" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
      <Option>Gastronomy</Option>
      </a>
      <Option>Promotions</Option>
      <Option>Location</Option>
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
    font-size: 1rem;
    text-transform: uppercase;
    gap: 2rem;
    background-image: linear-gradient(rgb(111, 111, 111) 50%, transparent);
    position: fixed;
    width: 100vw;
    color: white;
    padding-top: 0.5rem;
    z-index: 10;
    text-decoration: none;
    #click {
      text-decoration: none;
      color: white;

    }
`

const Logo = styled.img`
    width: 80px;
    margin-right: 2rem;
    margin-left: 2rem;
    :hover {
        cursor: pointer;
    }
`

const Option = styled.a`
    @media screen and (max-width: 480px) {
        display: none;
    }
    :hover {
        cursor: pointer;
        color: goldenrod;
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
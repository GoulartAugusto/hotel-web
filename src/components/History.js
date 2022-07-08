import React from 'react';
import styled from 'styled-components';
import History01 from '../images/history_01.jpg';
import History02 from '../images/history_03.jpg';
import History03 from '../images/history_02.jpg';
import LogoWhite from '../images/master-logo_white.png';
import { useState } from "react";
import ArrowL from '../images/arrowleft.png';
import ArrowR from '../images/arrowright.png';


function History() {
  const [index, setIndex] = useState(0);
  const images = [
    {
    img: History01
    },{
    img: History02
    },{
    img: History03
    }
  ];

  const handleArrow = (direction) => {
    if (direction ==="l"){
        setIndex(index !== 0 ? index-1 : 2)
    }
    if (direction ==="r"){
        setIndex(index !== 2 ? index+1 : 0)
    };
}

  return (
    <Container>
      <ArrowLeft onClick={() => handleArrow("l")}><Arrows src={ArrowL} /></ArrowLeft>
      <Wrapper style={{transform: `translateX(${-100*index}vw)`}}>
          {images.map((e) => {
            return (
            <ImageContainer>  
                 <Image src={e.img} />
            </ImageContainer>      
            )
              })}      
      </Wrapper>
      <Logo src={LogoWhite} />
      <Text>Exclusive Luxury Hotel in Brazil</Text>
      <Text02>-TOP 100 IN THE WORLD-</Text02>
      <ArrowRight onClick={() => handleArrow("r")}><Arrows src={ArrowR} /></ArrowRight>
    </Container>
  )
}

export default History


const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    padding-top: 2rem;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 480px) {
        height: 100vh;
    }
`

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    transition: all ease 0.25s;
`
const ImageContainer = styled.div`
    width: 100vw;
    height: 100%;
    position: relative;
`

const Image = styled.img`
    width: 100vw;
    height: 100vh;
`

const Logo = styled.img`
    position: absolute;
    width: 200px;
    top: 14%;
    right: 42%;

    @media screen and (max-width: 480px) {
        display: none;
    }

`

const Text = styled.h1`
    color: white;
    text-shadow: 5px 1px 4px black;
    font-size: 2.7rem;
    position: absolute;
    top: 40%;
    right: 16%;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 0.4rem;

    @media screen and (max-width: 480px) {
        display: none;
        position: absolute;
        top: 40%;
    }
`

const Text02 = styled.h1`
    color: white;
    text-shadow: 5px 1px 4px black;
    font-size: 2rem;
    position: absolute;
    top: 52%;
    right: 28%;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 0.4rem;

    @media screen and (max-width: 480px) {
        position: absolute;
        top: 55%;
        right: 0%;
    }
`

const ArrowLeft = styled.div`
    left: 0;
    position: absolute;
    width: 10%;
    height: 20%;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const ArrowRight = styled.div`
    right: 0;
    position: absolute;
    width: 10%;
    height: 20%;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;
    @media screen and (max-width: 480px) {
        margin-right: 2rem;
    }
`

const Arrows = styled.img`
    position: absolute;
    height: 50%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;
`
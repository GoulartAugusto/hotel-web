import React from 'react'
import styled from 'styled-components'
import { useState } from "react";
import ArrowL from '../images/arrowleft.png';
import ArrowR from '../images/arrowright.png';
import Accommodation01 from '../images/accommodation_01.jpg'
import Accommodation02 from '../images/accommodation_02.jpg'
import Accommodation03 from '../images/accommodation_03.jpg'
import Accommodation04 from '../images/accommodation_04.jpg'
import Accommodation05 from '../images/accommodation_05.jpg'
import Accommodation06 from '../images/accommodation_06.jpg'

function Accommodations() {

  const images = [
    {
      img: Accommodation01
    },
    {
      img: Accommodation02
    },
    {
      img: Accommodation03
    },
    {
      img: Accommodation04
    },
    {
      img: Accommodation05
    },
    {
      img: Accommodation06
    },
  ]

  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction ==="l"){
        setIndex(index !== 0 ? index-1 : 5)
    }
    if (direction ==="r"){
        setIndex(index !== 5 ? index+1 : 0)
    };
}

  return (
    <Container id="accommodations">
      <ArrowLeft onClick={() => handleArrow("l")}><Arrows src={ArrowL} /></ArrowLeft>
        <Carousel style={{transform: `translateX(${-90*index}vw)`}}>
          {images.map((e) => {
              return (
              <ImageContainer>  
                  <Image src={e.img} />
              </ImageContainer>      
              )
                })}
        </Carousel>
        <Text>Ours Luxury Suites</Text>
      <ArrowRight onClick={() => handleArrow("r")}><Arrows src={ArrowR} /></ArrowRight>
    </Container>
  )
}

export default Accommodations

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Carousel = styled.div`
    height: 80vh;
    width: 90vw;
    background: white;
    text-align: center;
    display: flex;
    transition: all ease 0.25s;
`

const ArrowLeft = styled.div`
    left: 0;
    position: absolute;
    width: 10%;
    height: 20%;
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const ArrowRight = styled.div`
    right: 0;
    position: absolute;
    width: 10%;
    height: 20%;
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

const ImageContainer = styled.div`
    height: 80vh;
    width: 90vw;
    position: relative;
`

const Image = styled.img`
    height: 80vh;
    width: 90vw;
`

const Text = styled.h1`
    color: white;
    text-shadow: 5px 1px 4px black;
    font-size: 2.7rem;
    position: absolute;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 0.4rem;
`
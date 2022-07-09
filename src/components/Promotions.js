import React from 'react'
import styled from 'styled-components'
import Promotion01 from "../images/promotion_01.jpg"
import Promotion02 from "../images/promotion_02.jpg"
import Promotion03 from "../images/promotion_03.jpg"


function Promotions() {
  return (
    <Container>
      <Cards>
        
        <Card>
          <Title>Full Board &#38; Drinks</Title>
          <HoverTitle>Full Board &#38; Drinks</HoverTitle>
          <Description>Get the Full board and unlimited drinks, discount price only with antecipated reservation.</Description>
          <BgImage src={Promotion01} />
          <Button>RESERVE</Button>
        </Card>
        
        <Card>
        <Title>Special Spa Services</Title>
        <HoverTitle>Special Spa Services</HoverTitle>
        <Description>Enjoy the best and more efficient massage, facial and body treatments with exclusive access and most classified professionals.</Description>
        <BgImage src={Promotion02} />
        <Button>RESERVE</Button>
        </Card>
        
        <Card>
        <Title>Car Rental Partnership</Title>
        <HoverTitle>Car Rental Partnership</HoverTitle>
        <Description>Chose the best vehicles on the town with exclusive price for Grand Master Hotel guests.</Description>
        <BgImage src={Promotion03} />
        <Button>RESERVE</Button>        
        </Card>
      </Cards>
    </Container>
  )
}

export default Promotions

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: auto;
    position: relative;

    @media screen and (max-width: 1000px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    }
`

const Cards = styled.div`
    display: inline-block;
    margin: 0.5rem;
    overflow: hidden;
    height: 100vh;
    position: relative;

    @media screen and (max-width: 1000px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    width: 100%;
    }
`

const Card =  styled.div`
    display: inline-block;
    margin: 0.5rem;
    transition: all ease 0.25s;
    overflow: hidden;
    background-color: goldenrod;
    position: relative;

    
`

const BgImage = styled.img`
    display: block;
    width: 30vw;
    height: 100vh;
    margin: 0;
    position: relative;
    transform: scale(1.1);
    :hover{
      overflow: hidden;
      transition: all ease-in 0.5s;
      opacity: 30%;
      transform: scale(1);
    }

    @media screen and (max-width: 1000px) {
      width: 100%;
    }

`

const Title = styled.h1`
    flex: none;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    text-shadow: 5px 1px 4px black;
    padding-top: 10rem;
    max-width: 400px;
    position: absolute;
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.7rem;
    text-align: center;
    justify-content: center;
    position: absolute;
    display: table;
    margin: 0 auto;
    z-index: 155;

    ${Cards}:hover & {
    display: none;
  }
`

const Description = styled.p`
    color: white;
    padding-top: 12rem;
    max-width: 250px;
    position: absolute;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.7rem;
    text-align: left;
    justify-content: center;
    position: absolute;
    display: table;
    margin: 2rem auto;
    z-index: 155;
    margin-left: 3rem;
    text-shadow: 5px 1px 4px black;
    
    display: none;

    ${Cards}:hover & {
      display: block;
    }
`

const Button = styled.button`
    width: 6rem;
    height: 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    background: transparent;
    border: 1px solid white;
    cursor: pointer;
    color: white;
    position: absolute;
    bottom: 10%;
    right: 38%;

    display: none;
    
    ${Cards}:hover & {
    display: block;
    }

    ${BgImage}:hover & {
      transition: all ease-in 0.5s;
      opacity: 40%;
      transform: scale(1);
    }
`

const HoverTitle = styled.h2`
  font-size: 5rem;
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
  color: whitesmoke;
  text-shadow: 5px 1px 4px black;
  font-family: 'Times New Roman', Times, serif;
  position: absolute;
    padding-top: 8rem;
    max-width: 250px;
    position: absolute;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.7rem;
    text-align: left;
    justify-content: center;
    position: absolute;
    display: table;
    margin: 2rem auto;
    z-index: 155;
    margin-left: 3rem;

    display: none;
    
    ${Cards}:hover & {
    display: block;
    }
`

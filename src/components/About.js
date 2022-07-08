import React from 'react';
import styled from 'styled-components';
import AboutImg from '../images/about_01.jpg';
import LogoWhite from '../images/master-logo_white.png';

function About() {
  return (
    <Container id="about">
      <Background>
      <Image src={AboutImg} />
        <Logo src={LogoWhite} />
        <Title>
          HOTEL GRAND MASTER <br /> Florianópolis
        </Title>
        <Text>
        The Hotel Grand Master Florianópolis is the ideal refuge for recharge the energys before activities in a long day at the Catarinense capital. Located on downtown region of the city, near of the Floripa Airport and with easy access both to mainland and the beaches of the Island, the hotel have a allways ready staff for receive you with a great smile on the face. Modern accommodations with 5 stars confort and breathtaking view of the historic Bridge Hercílio Luz. Live this expirience and feel good on our Hotel in Florianópolis.
        </Text>
      </Background>
    </Container>
  )
}

export default About

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: goldenrod;
    `

//The :hover zoom effect only work without getting outside the div is using the params on <Background>

const Image = styled.img`
    width: 100%;
    height: 100vh;
    position: relative;
    transform: scale(1.1);
    :hover{
      overflow: hidden;
      transition: all ease-in 0.5s;
      opacity: 80%;
      transform: scale(1);
    }
    `
const Background = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100vh;
`

const Logo = styled.img`
    position: absolute;
    width: 180px;
    margin-right: 2rem;
    margin-left: 2rem;
    top: 128%;
    right: 55%;
    
    @media screen and (max-width: 480px) {
      display: none;
    }
    
    `


const Title = styled.h1`
    color: white;
    font-family: 'Times New Roman', Times, serif;
    text-shadow: 5px 1px 4px black;
    margin-top: 0;
    position: absolute;
    top: 156%;
    right: 50%;
    
    @media screen and (max-width: 580px) {
      display: none;
    }
    `

const Text = styled.p`
    color: whitesmoke;
    font-weight: 300;
    max-width: 400px;
    text-align: justify;
    background-color: grey;
    position: absolute;
    padding: 2rem;
    border-radius: 2px;
    top: 130%;
    right: 5%;
    margin-left: 2rem;
    @media screen and (max-width: 480px) {
      top: 120%;
      right: 25%;
    }

    @media screen and (max-width: 1000px) {
      max-width: 200px;
    }
    `
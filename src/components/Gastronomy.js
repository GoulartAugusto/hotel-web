import React from 'react'
import styled from 'styled-components'
import Gastronomy01 from '../images/gastronomy_01.jpg'
import Gastronomy02 from '../images/gastronomy_02.jpg'


function Gastronomy() {
  return (
      <Container id="gastronomy">
        <Background>
          <Image src={Gastronomy01} />
        </Background>
        <Background>
          <Image02 src={Gastronomy02} />
        </Background>
        <Background>
        <h1 className='space'>Gastronomic Space</h1>
        <Text></Text>
        </Background>
      </Container>
  )
}

export default Gastronomy

const Container = styled.div`
    display: inline-block;
    height: 100vh;
    width: 100%;
    background-color: grey;

    .space {
      font-size: 1.4rem;
      font-weight: 400;
      position: absolute;
      right: 30%;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid white;
      color: whitesmoke;
      font-family: 'Times New Roman', Times, serif;
    }
`

const Background = styled.div`
    display: block;
    overflow: hidden;
    float: left;
`

const Image = styled.img`
    width: 98.8vw;
    height: 50vh;
    transform: scale(1.1);
    :hover{
      overflow: hidden;
      transition: all ease-in 0.5s;
      opacity: 70%;
      transform: scale(1);
    }
`
const Image02 = styled.img`
    width: 30vw;
    height: 48.7vh;
    transform: scale(1.1);
    :hover{
      overflow: hidden;
      transition: all ease-in 0.5s;
      opacity: 70%;
      transform: scale(1);
    }
`

const Text = styled.p`
    color: whitesmoke;
    font-weight: 400;
    font-size: 0.9rem;
    text-align: justify;

`
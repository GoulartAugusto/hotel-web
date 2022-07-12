import React from 'react'
import styled from 'styled-components'
import Event01 from '../images/event_01.jpg';
import Event02 from '../images/event_02.jpg';


function Events() {
  return (
    <Container id="events">
      <Background>
        <Image01 src={Event01} />
        <Title>BEAUTIFULL VIEWS &#38; PRIVACY</Title>
      </Background>
      <Background>
        <Image02 src={Event02} />
        <h1 className='events'>EVENTS</h1>
        <Description>Create your own exceptional and meaningfull expirience. Beautiful decoration, the best gastronomic meals and the best sound system all together to make the best event of your life.</Description>
      </Background>
    </Container>
  )
}

export default Events

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: goldenrod;
    `

const Image01 = styled.img`
    width: 100vw;
    height: 100vh;
    position: relative;
    transform: scale(1.1);
    :hover{
      overflow: hidden;
      transition: all ease-in 0.5s;
      opacity: 90%;
      transform: scale(1);
    }

    @media screen and (max-width: 1000px) {
      display: none;
    }
    `

const Image02 = styled.img`
    width: 40vw;
    height: 50vh;
    position: relative;
    transform: scale(1.3);
    z-index: 2;
    :hover{
      overflow: hidden;
      transition: all ease-in 0.5s;
      opacity: 80%;
      transform: scale(1.1);
    }

    @media screen and (max-width: 1000px) {
      height: 50vh;
      width: 100vw;
    }
    `



const Background = styled.div`
    display: inline-block;
    overflow: hidden;
    height: 100vh;

    .events {
      font-size: 1.4rem;
      font-weight: 400;
      padding-bottom: 1rem;
      border-bottom: 1px solid white;
      width: 100px;
      margin-left: 8rem;
      margin-top: 4rem;
      color: whitesmoke;
      font-family: 'Times New Roman', Times, serif;
    }

    @media screen and (max-width: 1000px) {
      .events {
        margin-left: 10rem;
        margin-top: 5rem;
      }
    }
`

const Title = styled.h1`
    color: white;
    font-family: 'Times New Roman', Times, serif;
    text-shadow: 5px 1px 4px black;
    margin-top: 0;
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.7rem;
    max-width: 600px;
    
    @media screen and (max-width: 1000px) {
      display: none;
    }
    `
const Description = styled.p`
    color: whitesmoke;
    font-weight: 400;
    font-size: 0.9rem;
    max-width: 250px;
    text-align: justify;
    margin-left: 2rem;
    z-index: 2;
`
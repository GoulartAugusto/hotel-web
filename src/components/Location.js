import React from 'react'
import styled from 'styled-components'
import Image from '../images/hotel-map.jpg'

function Location() {

  const location = {
    address: 'R. Alm Lamego, 481 - Centro, Florianópolis - SC, Brazil.',
    lat: -27.591171,
    lng: -48.562245,
  }

  return (
    <Container id="location">
      <Title>You in the Center of Everything</Title>
      <Left>
      <MapImg src={Image} />
      </Left>
      <Right>
      <Text>Located on downtown of the city near of the Airport and easy access for the beaches from south to north of the Island.</Text>
      <Text>R. Alm Lamego, 481 - Centro, Florianópolis - SC, Brazil.</Text>
      <Button href='https://www.google.com.br/maps/place/R.+Alm.+Lamego,+481+-+Centro,+Florian%C3%B3polis+-+SC,+88015-600/@-27.5911771,-48.5634204,18z/data=!3m1!4b1!4m5!3m4!1s0x952737f43c3405d7:0xdba11a2848b0f138!8m2!3d-27.5911795!4d-48.5623261?hl=pt-BR' target='_blank'>See Map</Button>
      </Right>
    </Container>
  )
}

export default Location

const Container = styled.div`
    background: grey;
    height: 100vh;
    display: inline-block;
    width: 100vw;
    padding-bottom: 2rem;
`

const Title = styled.h1`
    color: white;
    padding-top: 2rem;
    font-weight: 300;
    letter-spacing: 1rem;
    padding-bottom: 2rem;
`

const Text = styled.p`
    color: white;
    max-width: 300px;
    text-align: justify;
    float: right;
    margin-right: 10rem;
`

const Button = styled.a`
    background: white;
    width: 150px;
    height: 30px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: center;
    padding-top: 0.3rem;
    :hover{
      color: white;
      background: black;
    }
`

const MapImg = styled.img`
    width: 600px;
    height: 300px;
    margin-left: 2rem;

    :hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 560px) {
        width: 350px;
        height: 250px;
    }
`
const Left = styled.div`
    float: left;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3rem;
    margin-right: 3rem;
`

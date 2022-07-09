import React from 'react'
import styled from 'styled-components'
import Photo01 from '../images/photo_01.jpg';
import Photo02 from '../images/photo_02.jpg';
import Photo03 from '../images/photo_03.jpg';


function Photos() {
  return (
    <Container id="photos">
      <Background>
        <Image01 src={Photo01} />
        <Title>BEAUTIFULL VIEWS &#38; PRIVACY</Title>
      </Background>
      <Background>
        <Image02 src={Photo02} />
        <Image03 src={Photo03} />
        <h1 className='relax'>RELAX</h1>
        <Text>Have your time to unwind in ours exclusive suites after a day of many options of beaches and gastronomy that Floripa have to offer for you. With our confort and wide space accommodations you will easily work or relax watching nice views.</Text>
      </Background>
    </Container>
  )
}

export default Photos

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: goldenrod;
    `

const Image01 = styled.img`
    width: 120vw;
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
    width: 30vw;
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

const Image03 = styled.img`
    width: 30vw;
    height: 50vh;
    position: relative;
    transform: scale(1.3);
    opacity: 30%;
    :hover{
      overflow: hidden;
      transition: all ease-in 0.5s;
      transform: scale(1.1);
    }

    @media screen and (max-width: 1000px) {
      height: 60vh;
      width: 100vw;
    }
    `

const Background = styled.div`
    display: inline-block;
    overflow: hidden;
    height: 100vh;

    .relax {
      font-size: 1.4rem;
      font-weight: 400;
      padding-bottom: 1rem;
      border-bottom: 1px solid white;
      color: whitesmoke;
      font-family: 'Times New Roman', Times, serif;
      position: absolute;
      top: 265%;
      left: 80%;
    }

    @media screen and (max-width: 1000px) {
      .relax {
      left: 40%;

      }
    }
`

const Title = styled.h1`
    color: white;
    font-family: 'Times New Roman', Times, serif;
    text-shadow: 5px 1px 4px black;
    margin-top: 0;
    position: absolute;
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.7rem;
    top: 250%;
    left: 10%;
    max-width: 600px;
    
    @media screen and (max-width: 1000px) {
      display: none;
    }
    `
const Text = styled.p`
    color: whitesmoke;
    font-weight: 400;
    font-size: 0.9rem;
    max-width: 250px;
    text-align: justify;
    position: absolute;
    top: 275%;
    right: 5%;
    margin-left: 2rem;
    z-index: 2;
`
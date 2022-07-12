import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import MasterLogo from '../images/master-logo_black.png'

function Footer() {
  return (
    <Container>
      <Left>
        <Logo src={MasterLogo} />
        <Socials>
          <AiFillFacebook size={30} /> <AiOutlineInstagram size={30} /> <AiOutlineTwitter size={30} /> <AiFillYoutube size={30} />
        </Socials>
        <Adress>GRAND MASTER HOTEL</Adress>
        <Adress><a href="https://www.google.com.br/maps/place/R.+Alm.+Lamego,+481+-+Centro,+Florian%C3%B3polis+-+SC,+88015-600/@-27.5911771,-48.5634204,18z/data=!3m1!4b1!4m5!3m4!1s0x952737f43c3405d7:0xdba11a2848b0f138!8m2!3d-27.5911795!4d-48.5623261?hl=pt-BR' target='_blank">Alm Lamego St 481 - Centro, Florianópolis - SC, Brazil.</a></Adress>
      </Left>
      <Middle>
        <Links>
          <Link>ABOUT US</Link>
          <Link>PRESS ROOM</Link>
          <Link>CONTANCT</Link>
          <Link>DIRECTIONS</Link>
        </Links>
        <Links>
          <Link>CAREERS</Link>
          <Link>PRIVACY POLICY</Link>
          <Link>AWARDS</Link>
          <Link>EVENTS</Link>
        </Links>
      </Middle>
      <Right>
        <Email placeholder='EMAIL SIGN UP' />
        <Button>SUBSCRIBE</Button>
        <Title>receive our news, tips and most recent promotions</Title>
        <Title>&copy; all rights reserved.</Title>
        <Title>Developed by <a href="https://goulartportifolio.web.app/" target='_black'>Augusto Goulart</a></Title>
      </Right>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 2rem;
    border-bottom: 2rem solid grey;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Left = styled.div`
    border-right: 1px solid grey;
    width: 300px;

    @media screen and (max-width: 1000px) {
      border-right: none;
    }
`
const Socials = styled.div`
    font-size: 50px;
    margin-top: -1rem;
    :hover {
      color: goldenrod;
      cursor: pointer;
    }
`

const Middle = styled.div`
    display: flex;
    border-right: 1px solid grey;
    width: 300px;
    align-items: center;

    @media screen and (max-width: 1000px) {
      border-right: none;
    }
  `

const Right = styled.div`
    margin-right: 4rem;
    width: 400px;

    @media screen and (max-width: 1000px) {
      padding-left: 4rem;
    }
`

const Logo = styled.img`
    width: 150px;
`
const Adress = styled.h3`
    font-size: 0.8rem;
    max-width: 150px;
    text-align: left;
    font-weight: 400;
    :hover {
      color: goldenrod;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: black;
      :hover{
      color: goldenrod;
      }
    }
`

const Links = styled.ul`
`

const Link = styled.li`
    font-size: 0.8rem;
    font-weight: 400;
    list-style: none;
    margin-bottom: 1.5rem;
    cursor: pointer;
    :hover {
      color: goldenrod;
    }
`

const Email = styled.input`
    width: 250px;
    height: 2rem;
    border: none;
    background: rgb( 188, 188, 188);
    padding-left: 30px;
`

const Button = styled.button`
    background-color: black;
    height: 2rem;
    color: white;
    cursor: pointer;
`

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 1rem;
    text-align: justify;
    margin-left: 2rem;
    margin-top: 2rem;

    a {
      text-decoration: none;
      color: goldenrod;
    }
`
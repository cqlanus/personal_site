import React from "react"
import styled from "styled-components"

import LinkList from '../components/LinkList'

import me from "../images/me.jpg"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Body = styled.div`
  max-width: 80ch;
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.div`
  font-family: "Courier New", Courier, monospace;
`

const ImageContainer = styled.div`
    height: 5em;
    width: 5em;
    border-radius: 50%;
    background: url(${me});
    background-size: contain;
    margin-bottom: .5em;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2em;
  display: flex;
  justify-content: center;
  font-size: .6em;
`

const Main = () => (
    <Container>
        <Body>
            <ContactInfo>
                <ImageContainer />
                <Text>Chris Lanus</Text>
                <Text>Software Developer</Text>
                <Text>Chicago, IL</Text>
                <LinkList/>
            </ContactInfo>
        </Body>
        <Footer>
            <Text>Christopher Lanus 2019</Text>
        </Footer>
    </Container>
)

export default Main

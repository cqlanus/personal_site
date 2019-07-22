import React from "react"
import styled from "styled-components"

import "../styles/main.css"

import LinkList from "../components/LinkList"
import Wrapper from "../components/common/Wrapper"
import Text from "../components/common/Text"

import me from "../images/me.jpg"

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10vh;
`

const ImageContainer = styled.div`
    height: 5em;
    width: 5em;
    border-radius: 50%;
    background: url(${me});
    background-size: contain;
    margin-bottom: 0.5em;
`

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2em;
    display: flex;
    justify-content: center;
    font-size: 0.6em;
`

const Index = () => (
    <Wrapper>
        <ContactInfo>
            <ImageContainer />
            <Text>Chris Lanus</Text>
            <Text>Software Developer</Text>
            <Text>Chicago, IL</Text>
            <LinkList />
        </ContactInfo>
    </Wrapper>
)

export default Index

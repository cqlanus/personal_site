import React from "react"
import styled from "styled-components"
import colors from "../constants/colors"

import Section from "./Section"
import LinkList from "./LinkList"

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
`

const Subtitle = styled.span`
  font-size: 22px;
  text-align: center;
`

const Hero = () => {
    return (
        <Section color={colors.red} job={"hero"}>
            <Container>
                <Title>Hi, I'm Chris Lanus.</Title>
                <Subtitle>This is my site.</Subtitle>
                <Subtitle>Take a look around.</Subtitle>

                <LinkList />
            </Container>
        </Section>
    )
}

export default Hero

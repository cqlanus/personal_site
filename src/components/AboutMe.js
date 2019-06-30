import React from "react"
import styled from "styled-components"

import Section from "./Section"

import colors from "../constants/colors"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1em;
`

const Title = styled.h2``

const Text = styled.p`
  max-width: 50ch;
  text-align: center;
  margin-bottom: 1em;
`

const AboutMe = () => {
    return (
        <Section color={colors.blue} job={"main"}>
            <Container>
                <Title>About Me</Title>
                <Text>
          I am a Chicago-born, Notre Dame-educated, former Los Angeles Catholic
          school science educator, school gardener, and Instructional
          Technologist.
                </Text>
                <Text>
          Currently, I am a Chicago-residing, Fullstack Academy-educated, Web
          Developer who still cares deeply about the state of learning in
          today's world.
                </Text>
                <Text>
          I like Baseball analyzing, Bread baking, Bird viewing, Butterfly
          photographing, Board game playing.
                </Text>
            </Container>
        </Section>
    )
}

export default AboutMe

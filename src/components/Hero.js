import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

import Section from "./Section"

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1``

const Subtitle = styled.span`
  font-size: 22px;
  text-align: center;
`

const ListContainer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  width: 25%;
  align-items: center;
`

const Item = styled.li`
  list-style: none;
`

const Link = styled.a`
  color: #fff;
  font-size: 24px;
`

const Hero = () => {
    return (
        <Section color={"indianred"} job={"hero"}>
            <Container>
                <Title>Hi, I'm Chris Lanus.</Title>
                <Subtitle>This is my site.</Subtitle>
                <Subtitle>Take a look around.</Subtitle>

                <ListContainer>
                    <Item>
                        <Link href="https://www.linkedin.com/in/cqlanus/">
                            <FaLinkedin />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="https://github.com/cqlanus">
                            <FaGithub />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="https://www.instagram.com/cqlanus/">
                            <FaInstagram />
                        </Link>
                    </Item>
                </ListContainer>
            </Container>
        </Section>
    )
}

export default Hero

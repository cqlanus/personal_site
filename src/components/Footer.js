import React from "react"
import styled from "styled-components"

import Section from "./Section"

const Container = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: "center";
`

const Footer = () => (
    <Container>
        <span>Testing123</span>
    </Container>
)

export default Footer

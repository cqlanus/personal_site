import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${props => props.color || "lightgrey"};
  grid-area: ${props => props.job || "default"};
  padding: 0.5em;
`

const Section = ({ color, job, children }) => (
    <Container color={color} job={job}>
        {children}
    </Container>
)

export default Section

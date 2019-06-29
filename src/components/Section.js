import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${props => props.color || "lightgrey"};
  grid-area: ${props => props.role};
`

const Section = ({ color, role }) => <Container color={color} role={role} />

export default Section

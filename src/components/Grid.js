import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 1fr 1fr;
  grid-template-areas:
    "hero hero hero"
    "main main photo";
`

const Grid = ({ children }) => {
  return <Container>{children}</Container>
}

export default Grid

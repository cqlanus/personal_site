import React from "react"
import styled from "styled-components"
import device from "../constants/device"

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr auto 1fr;
  grid-template-areas:
    "hero"
    "photo"
    "main";

  @media ${device.tablet} {
    grid-template-rows: 2fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero hero hero"
      "main main photo";
  }
`

const Grid = ({ children }) => {
    return <Container>{children}</Container>
}

export default Grid

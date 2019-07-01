import React from "react"
import styled from "styled-components"

import me from "../images/me.jpg"
import device from "../constants/device"
import colors from "../constants/colors"

const Image = styled.div`
  grid-area: photo;
  background-image: url(${me});
  background-size: cover;
  background-position: center;
  height: 25em;

  @media ${device.tablet} {
    background-position: top center;
  }
`

const PhotoTile = () => {
    return (
        <Image color={colors.yellow} job={"photo"} />
    )
}

export default PhotoTile

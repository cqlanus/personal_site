import React from "react"
import styled from "styled-components"

import device from "../constants/device"
import colors from "../constants/colors"

const Image = styled.div`
  grid-area: photo;
  background-image: url("http://chrislan.us/images/chris2.jpg");
  background-size: cover;
  background-position: center;
  height: 25em;

  @media ${device.tablet} {
  }
`

const PhotoTile = () => {
    return <Image color={colors.yellow} job={"photo"}></Image>
}

export default PhotoTile

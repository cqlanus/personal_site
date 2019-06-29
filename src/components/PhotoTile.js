import React from "react"

import Section from "./Section"

import colors from "../constants/colors"

const PhotoTile = () => {
    return (
        <Section color={colors.yellow} job={"photo"}>
            <h2>Photo</h2>
        </Section>
    )
}

export default PhotoTile

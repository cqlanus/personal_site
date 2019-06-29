import React from "react"

import Grid from "../components/Grid"
import Section from "../components/Section"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import PhotoTile from "../components/PhotoTile"

import colors from "../constants/colors"

const IndexPage = () => (
    <Grid>
        <Hero />
        <AboutMe />
        <PhotoTile />
    </Grid>
)

export default IndexPage

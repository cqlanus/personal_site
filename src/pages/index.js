import React from "react"

import Grid from "../components/Grid"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import PhotoTile from "../components/PhotoTile"
import Footer from "../components/Footer"

const IndexPage = () => (
    <Grid>
        <Hero />
        <PhotoTile />
        <AboutMe />
    </Grid>
)

export default IndexPage

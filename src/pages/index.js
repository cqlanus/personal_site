import React from "react"
import { Link } from "gatsby"

import Grid from '../components/Grid'
import Section from '../components/Section'

const IndexPage = () => (
  <Grid>
    <Section color={'indianred'} role={'hero'} />
    <Section color={'steelblue'} role={'main'}/>
    <Section color={'goldenrod'} role={'photo'}/>
  </Grid>
)

export default IndexPage

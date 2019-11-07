import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/common/Wrapper'
import Title from '../components/common/Title'

const Link = styled.a`
    font-weight: bold;
    :hover {
        text-decoration: underline;
    }
`

const Project = styled.div`
    margin-top: 1em;
`

const Portfolio = () => (
    <Wrapper>
        <Title>Portfolio</Title> 
        <Project>
            <Link target="_blank" href="https://weather.chrislanus.com">Weather App</Link>
        </Project>
        <Project>
            <Link target="_blank" href="https://phenology.chrislanus.com">Phenology</Link>
        </Project>
    </Wrapper>
)

export default Portfolio
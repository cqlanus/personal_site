import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import Body from './Body'
import Text from './Text'
import Nav from './Nav'

const Main = styled.div`
`

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2em;
    display: flex;
    justify-content: center;
    font-size: 0.6em;
`

const Wrapper = ({children}) => (
    <Main>
        <Nav/>
        <Container>
            <Body>
                {children}
            </Body>
            <Footer>
                <Text>Christopher Lanus 2019</Text>
            </Footer>
        </Container>
    </Main>
)

export default Wrapper
import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/common/Wrapper'
import Title from '../components/common/Title'

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
`

const List = styled.ul`
    margin-left: 2em;
    flex-basis: 80%;
    text-align: left;
    list-style: circle;

    @media (max-width: 400px) {
        margin-left: 0;
        flex-basis: 100%;
        text-align: left;
    }
    
`

const Item = styled.li`
    padding-left: 1em;

    @media (max-width: 400px) {
        padding-left: 0;
    }
`

const About = () => (
    <Wrapper>
        <Title>About</Title>
        <ListContainer>
            <List>
                <Item>Software engineer in Chicago</Item>
                <Item>Full-stack JS bootcamp grad</Item>
                <Item>Former LA high school science teacher</Item>
                <Item>Husband, father, brother, son</Item>
                <Item>Birder, gardener, naturalist</Item>
            </List>
        </ListContainer>
    </Wrapper>
)

export default About
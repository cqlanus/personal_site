import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PageLinks = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  padding: .5em 1em;
  box-sizing: border-box;
`

const PageLink = styled(Link)`
  color: black;
  text-align: right;
  text-decoration: none;
  margin-left: 1em;

  :hover {
    font-weight: bold;
  }
`


const Nav = () => {
    return (
        <nav>
            <PageLinks>
                <PageLink to="/portfolio">Portfolio</PageLink>
                <PageLink to="/about">About</PageLink>
                <PageLink to="/">/</PageLink>
            </PageLinks>
        </nav>
    )
}

export default Nav
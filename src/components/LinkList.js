import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"

const ListContainer = styled.div`
    flex: 1;
    display: flex;
    margin-top: 1em;
    align-items: center;
`

const Item = styled.li`
  list-style: none;
  flex-grow: 1;
  flex-basis: 25%;  
  text-align: center;
  margin-right: 0.5em;

  :last-child {
      margin-right: 0;
  }

`

const Link = styled.a`
  color: #000;
  font-size: 24px;
`

const LinkList = () => (
    <ListContainer>
        <Item>
            <Link href="https://www.linkedin.com/in/cqlanus/" target="_blank">
                <FaLinkedin />
            </Link>
        </Item>
        <Item>
            <Link href="https://github.com/cqlanus" target="_blank">
                <FaGithub />
            </Link>
        </Item>
        <Item>
            <Link href="https://www.instagram.com/cqlanus/" target="_blank">
                <FaInstagram />
            </Link>
        </Item>
        <Item>
            <Link href="mailto:cqlanus@gmail.com">
                <MdMailOutline />
            </Link>
        </Item>
    </ListContainer>
)

export default LinkList

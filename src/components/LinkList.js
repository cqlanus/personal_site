import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"

const ListContainer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  width: 25%;
  align-items: center;
  flex-wrap: wrap;
`

const Item = styled.li`
  list-style: none;
  flex: 1;
  text-align: center;
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

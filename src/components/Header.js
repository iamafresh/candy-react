import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assrt/img/logo.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Img = styled.img`
  max-width: 100%;
`
const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-left: 20px;
`

const Header = () => {
  return (
    <Wrapper>
      <Img src={logo} alt='logo' title='logo' />
      <Link to='/'><Span>泰链</Span></Link>
    </Wrapper>
  )
}

export default Header

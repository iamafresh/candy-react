import React from 'react'
import mainTitle from '../assrt/img/minTitle.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 10px;
`
const Img = styled.img`
  max-width: 100%;
`

const MainTitle = () => {
  return (
    <Wrapper>
      <Img src={mainTitle} alt='首次空投' />
    </Wrapper>
  )
}

export default MainTitle

import React from 'react'
import styled from 'styled-components'
import topLeft from '../assrt/img/topLeft.png'
import topRight from '../assrt/img/topRight.png'
import bottomLeft from '../assrt/img/bottomLeft.png'
import bottomRight from '../assrt/img/bottomRight.png'

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 20px;
  padding: 6px;
`
const Box = styled.div`
  width: 100%;
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0 0 2px 1px rgba(255, 255, 255, .3);
  padding: 20px;
  min-height: 100px;
`

const BoxBorder = (props) => {
  return (
    <Wrapper>
      <Box>
        {/* props.children占位符 */}
        { props.children }
      </Box>
      <img src={topLeft} style={{position: 'absolute', top: '-5px', left: '-3px'}} />
      <img src={topRight} style={{position: 'absolute', top: '-3px', right: '-2px'}} />
      <img src={bottomLeft} style={{position: 'absolute', bottom: '-4px', left: '-3px'}} />
      <img src={bottomRight} style={{position: 'absolute', bottom: '-4px', right: '-4px'}} />
    </Wrapper>
  )
}

export default BoxBorder

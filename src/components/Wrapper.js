import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 90%;
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 10px;
`

const Wrapper = (props) => {
  return (
    <Wrap>
      {/* props.children这属性坑我一把 */}
      {props.children}
      }
    </Wrap>
  )
}

export default Wrapper

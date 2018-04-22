import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const BaseButton = styled(Button)`
  width: 100%;
  height: 50px;
  background: -webkit-linear-gradient(right, rgb(111,77,250) 0%, rgb(144,67,246) 49%, rgb(180,57,242) 100%);
  background: -o-linear-gradient(right, rgb(111,77,250) 0%, rgb(144,67,246) 49%, rgb(180,57,242) 100%);
  background: -moz-linear-gradient(right, rgb(111,77,250) 0%, rgb(144,67,246) 49%, rgb(180,57,242) 100%);
  background: linear-gradient(right, rgb(111,77,250) 0%, rgb(144,67,246) 49%, rgb(180,57,242) 100%);
  border-radius: 10px;
  box-shadow: 0 8px 4px 1px rgb(111,77,250);
  color: #fff;
  margin-bottom: 10px;
  padding: 10px 0 12px 0;
  text-align: center;
  text-shadow: 0 -1px 1px #1e2d4d;
  -webkit-background-clip: padding-box;
  &:hover {
    cursor: pointer;
  };
  &:active {
    box-shadow: 0 4px 3px 0 rgb(111,77,250);
    transform: translateY(4px);
  }
`
export default () => {
  return (
    <BaseButton />
  )
}

import React from 'react'
import { Button } from 'antd'
import Wrapper from '../components/Wrapper'
import BoxBorder from '../components/BoxBorder'
import Header from '../components/Header'

const WaitResult = (props) => {
  const handleClick = (porps) => {
    props.history.push('/')
  }

  return (
    <Wrapper>
      <Header />
      <BoxBorder>
        <div style={{padding: '20px'}}>
          <h2 style={{color: '#fff'}}>已提交提币申请 </h2>
          <h2 style={{color: '#fff'}}>等待区块确认 </h2>
        </div>
      </BoxBorder>
      <div style={{marginTop: '30px'}}>
        <Button htmlType='submit' className='btn-submit' onClick={handleClick}>
        <span
          style={{
            width: '100%',
            height: '50px',
            fontSize: '20px',
            lineHeight: '50px',
            verticalAlign: 'middle',
            color: 'rgb(255, 255, 255)'
          }}>返回</span>
      </Button>
      </div>
    </Wrapper>
  )
}

export default WaitResult

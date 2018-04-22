import React from 'react'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import BoxBorder from '../components/BoxBorder'
import { Button } from 'antd'

class ShowCandy extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.history.push('/draw-money')
  }

  render () {
    // 模拟的随机币值
    const random =  Math.floor(Math.random() * 50 + 50)
    // see: https://www.cnblogs.com/makan/p/4850071.html
    const randomStr = Math.random().toString(36).substr(2, 6).toUpperCase()

    return (
      <Wrapper>
        <Header />
        <BoxBorder>
          <div style={{padding: '20px'}}>
            <h2 style={{color: '#fff'}}>恭喜你共获得&nbsp;&nbsp;{random}&nbsp;TIC</h2>
            <h2 style={{color: '#fff'}}>邀请码：&nbsp;&nbsp;{randomStr}</h2>
          </div>
        </BoxBorder>
        <Button onClick={this.handleClick} className='btn-submit' style={{marginTop: '20px'}}>
          <span
            style={{
              width: '100%',
              height: '50px',
              fontSize: '20px',
              lineHeight: '50px',
              verticalAlign: 'middle',
              color: 'rgb(255, 255, 255)'
            }}>提取到钱包</span>
        </Button>
        <Button className='btn-submit' style={{marginTop: '20px'}}>
          <span
            style={{
              width: '100%',
              height: '50px',
              fontSize: '20px',
              lineHeight: '50px',
              verticalAlign: 'middle',
              color: 'rgb(255, 255, 255)'
            }}>分享可获得更多的Tic</span>
        </Button>
      </Wrapper>
    )
  }
}

export default ShowCandy

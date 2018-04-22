import React from 'react'
import { isChecksumAddress } from '../lib/utils'
import {
  Form,
  Button,
  Input
} from 'antd'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import '../components/btnSubmit.css'

class WrapForm extends React.Component {

  // 有问题 这个验证库
  isEthAddress = (rule, value, callback) => {
    if (value && (value.length !== 42)) {
      callback('你的以太坊地址不正确！')
      if (value.length === 42 && !isChecksumAddress(value)) {
        callback('你的以太坊地址不正确！')
      }
      callback()
    }
    callback()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        // 跳转
        this.props.history.push('/wait-result')
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('etmAddress', {
                  rules: [{
                    required: true,
                    message: '验证码不能为空！'
                  },
                  {
                    validator: this.isEthAddress
                  }]
                })(
                  <Input
                    placeholder='请输入钱包地址' 
                    style={{
                      fontWeight:'600',
                      margin: '20px 0',
                      background: 'transparent',
                      color: 'rgb(255, 255, 255)'
                    }} />
                )}
        </Form.Item>
        <Form.Item>
          <p style={{color:'rgba(255, 255, 255, .5)', marginTop: '20px' }}>
            注意：请输入支持ERC20的以太坊钱包地址才能成功提币！
          </p>
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' className='btn-submit'>
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
        </Form.Item>
      </Form>
    )
  }
}

const WrapperForm = Form.create()(WrapForm)

class DrawMoney extends React.Component {
  render () {
    return (
      <Wrapper>
        <Header />
        <WrapperForm history={this.props.history} />
      </Wrapper>
    )
  }
}

export default DrawMoney

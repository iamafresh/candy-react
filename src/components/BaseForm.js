import React from 'react'
import md5 from '../lib/md5.js'
import { isChecksumAddress } from '../lib/utils'
import { 
  Form,
  Icon,
  Input,
  Button, 
  CheckBox,
  Row,
  Col
  } from 'antd'


const FormItem = Form.Item

class BaseForm extends React.Component {
  componentDidMount () {
    var hex = md5('18565115910').substr(8, 16)
    var ethAddress = '0xc94cd681477e6a70a4797a9Cbaa9F1E52366823c';

    console.log(isChecksumAddress(ethAddress))
    console.log(hex)
  }

  validateToPhone = (rule, value, callback) => {
    // 总是需要调用 callback()
    // see: https://github.com/ant-design/ant-design/issues/5155
    const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/

    if (value && !phoneReg.test(value)) {
      callback('你的手机号码不正确！')
    } else {
      callback()
    }
  }

  validateToIdcard = (rules, value, callback) => {
    const  idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (value && !idCardReg.test(value)) {
      callback('你的身份证号码不正确！')
    } else {
      callback()
    }
  }
  
  onlyNumber = value => {
    return value.replace(/[^\d]/g, '')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll({first: true, force: false}, (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout='vertical' onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('contory', {
            rules: [{ required: true, message: '请输入你的国家名!' }]
          })(
            <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('phone', {
            rules: [
            {
              required: true,
              message: '请输入你的手机号！'
            }, 
            {
              validator: this.validateToPhone
            }],
            // 只能输入数字
            normalize: this.onlyNumber,
            initialValue: '18565115910',
            trigger: 'onChange'

          })(
            <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder='phone' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('idCard', {
            rules: [{
              required: true,
              message: '请输入你的身份证'
            },
            {
              validator: this.validateToIdcard
            }],
            initialValue: null
          })(
            <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder='身份证' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
            {
              required: true,
              message: '请输入你的姓名！'
            },
            {
              max: 10,
              message: '姓名最大长度不能超过10'
            },
            {
              whitespace: true,
              message: '姓名不能为空'
            }]
          })(<Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder='姓名' />
          )}
        </FormItem>
        <FormItem>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('testCode', {
                rules: [{
                  required: true,
                  message: '验证码不能为空！'
                }]
              })(
                <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder='testCode' />
              )}
            </Col>
            <Col span={12}>
              <Button>获取验证码</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit'>领取糖果</Button>
        </FormItem>


        <FormItem />
      </Form>
    )
  }
}

const WrapperForm = Form.create()(BaseForm)

export default WrapperForm

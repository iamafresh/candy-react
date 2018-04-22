import React from 'react'
import axios from 'axios'
import { isChecksumAddress } from '../lib/utils'
import { 
  Form,
  Icon,
  Input,
  Select,
  Button, 
  CheckBox,
  Row,
  Col
  } from 'antd'
import md5 from '../lib/md5.js'
import '../lib/css/flag-icon/css/flag-icon.min.css'
import './btnSubmit.css'
import BaseButton from '../components/BaseButton'
import BoxBorder from '../components/BoxBorder'


const FormItem = Form.Item
const Option = Select.Option

class BaseForm extends React.Component {
  componentDidMount () {
    var hex = md5('18565115910').substr(8, 16)
    var ethAddress = '0xc94cd681477e6a70a4797a9Cbaa9F1E52366823c';
    
    console.log(isChecksumAddress(ethAddress))
    console.log(hex)
    console.log(this.props.history)
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
    if (!!value) {
      return value.replace(/[^\d]/g, '')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // 每一次验证所有字段，遇到第一条不合格就报错停止
    this.props.form.validateFieldsAndScroll({first: true, force: true}, (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        // 跳转
        this.props.history.push('/show-candy')
        // 提交数据
        //this.handleRegister(values)
      }
    })
  }

  handleRegister (data) {
    let url = 'http://121.43.171.12:30000/api/candy/register'
    axios.post(url, data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form style={{padding: '15px'}} layout='vertical' onSubmit={this.handleSubmit}>
        <BoxBorder>
          <FormItem>
            {getFieldDecorator('contory', {
              rules: [{
                required: true,
                message: '请输入你的国家名!' }]
            })(
              <Select placeholder='请选择一个国家' style={{position: 'abslute', zIndex: '9999'}}>
              {/* 
                <Option value='cn'><span className='flag-icon flag-icon-cn flag-icon-squared'></span>&nbsp;&nbsp;中国</Option>
                <Option value='gr'><span className='flag-icon flag-icon-gr'></span>&nbsp;&nbsp;A国家</Option>
                <Option value='ag'><span className='flag-icon flag-icon-ag'></span>&nbsp;&nbsp;B国家</Option>
                <Option value='as'><span className='flag-icon flag-icon-as'></span>&nbsp;&nbsp;C国家</Option>
                <Option value='ca'><span className='flag-icon flag-icon-ca'></span>&nbsp;&nbsp;加拿大</Option>
               */}
              <Option value='CN'>中国</Option>
              <Option value='US'>美国</Option>
              <Option value='CA'>加拿大</Option>
              </Select>
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
              
              trigger: 'onChange'

            })(
              <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder='phone' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('personal_id', {
              rules: [{
                required: true,
                message: '请输入你的身份证'
              },
              {
                validator: this.validateToIdcard
              }]
            })(
              <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} placeholder='身份证' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [
              {
                required: true,
                message: '请输入你的姓名！'
              },
              {
                min: 2,
                message: '姓名最小长度不小于2'
              },
              {
                max: 5,
                message: '姓名最大长度不能超过5'
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
                  <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)', position: 'absolute'}} />} placeholder='testCode' />
                )}
              </Col>
              <Col span={12}>
                <Button style={{position: 'absolute'}} >获取验证码</Button>
              </Col>
            </Row>
          </FormItem>
        </BoxBorder>

        <FormItem style={{marginTop: '20px'}}>
          <Button htmlType='submit' className='btn-submit'>
            <span
              style={{
                width: '100%',
                height: '50px',
                fontSize: '20px',
                lineHeight: '50px',
                verticalAlign: 'middle',
                color: 'rgb(255, 255, 255)'
              }}>领取糖果</span>
          </Button>
        </FormItem>
      </Form> 
    )
  }
}

const WrapperForm = Form.create()(BaseForm)

export default WrapperForm

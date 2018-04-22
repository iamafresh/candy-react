import React from 'react'
import Wrapper from '../components/Wrapper'
import WrapperForm from '../components/BaseForm'
import Header from '../components/Header'
import MainTitle from '../components/MainTitle'

const Home = (props) => {
  console.log(props)
  return (
    <Wrapper>
      <Header />
      <MainTitle />
      <WrapperForm history={props.history} />
      {/*
       ===== 用户头像======
       <Blockie address='0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8' />
      */}
    </Wrapper>
  )
}

export default Home

import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import styled from 'styled-components'
import 'normalize.css'
import bg from './assrt/img/bg.gif'
import Home from './container/Home'
import ShowCandy from './container/ShowCandy'
import DrawMoney from './container/DrawMoney'
import WaitResult from './container/WaitResult'

const Wrapper = styled.div`
  background: url(${bg});
  background-size: 100%;
`

const App = () => (
  <Router>
    <Wrapper>
      <Route exact path='/' component={Home} />
      <Route path='/show-candy' component={ShowCandy} />
      <Route path='/draw-money' component={DrawMoney} />
      <Route path='/wait-result' component={WaitResult} />
    </Wrapper>
  </Router>
)

export default App

import React, { Component } from 'react'
import { Button } from 'antd'
import 'normalize.css'
import './App.css'

import Blockie from './components/Blockie'
import WrapperForm from './components/BaseForm'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <Blockie address='0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8' />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <Button type='primary'>Button</Button>
          <WrapperForm />
        </div>

      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import ChangeText from './components/ChangeText'
import FormPost from './components/FormPost'
import GetData from './components/GetData'
import './components/Styles/ChangeText/ChangeText.css'

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="centerText">React Examples</h3>
        <ChangeText />
        <FormPost />
        <GetData />
      </div>
    )
  }
}

export default App

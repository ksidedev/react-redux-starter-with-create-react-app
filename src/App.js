import React, { Component } from 'react'
import SelectSpider from './components/SelectSpider'
import StartPoint from './components/StartPoint'
import SendPoint from './components/SendPoint'
import OtherEntries from './components/OtherEntries'

class App extends Component {
  render() {
    return (
      <div className="form">
        <SelectSpider />
        <StartPoint />
        <SendPoint />
        <OtherEntries />
      </div>
    )
  }
}

export default App

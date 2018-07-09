import React, { Component } from 'react'
import Accordion from './Accordion/Accordion'
import './Styles/OtherEntries/OtherEntries.css'

class OtherEntries extends Component {
  render() {
    return (
      <div className="formWrapper row other">
        <Accordion />
      </div>
    )
  }
}

export default OtherEntries
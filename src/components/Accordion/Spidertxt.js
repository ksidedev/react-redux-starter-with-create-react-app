import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Styles/SpiderTxt/SpiderTxt.css'

class Spidertxt extends Component {
  render() {
    return (
      <div className="formWrapper col-xs-12 no-padding SpiderTxt">
        <div className="form-post col-xs-12 no-padding">
            <div className="inputWrapper">
              <div className="col-xs-9 no-padding">
                <p className="no-padding inputTitle">Message Recipient</p>
                <div className="col-xs-12"><input placeholder="Enter recipient name"/></div>
              </div>
              
              <div className="col-xs-12 no-padding">
                <div className="col-xs-9 no-padding">
                  <p className="inputTitle">Message Body</p>
                  <div className="col-xs-12"><textarea /></div>
                </div>

                <div className="col-xs-3 send no-padding">
                  <button>Send</button>
                </div>
              </div>
            </div>  
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  AircraftData: state.AircraftData
}))(Spidertxt)

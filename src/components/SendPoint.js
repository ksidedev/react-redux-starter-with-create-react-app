import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { getCreateAircraftData } from '../shared/helpers'
import { SelectedSendPoint, SubmitPoint } from '../shared/actions'
import './Styles/SendPoint/SendPoint.css'

class SendPoint extends Component {
  constructor(props: any) {
    super(props)
    this.getSendPointOption = this.getSendPointOption.bind(this)
    this.sendPointData = this.sendPointData.bind(this)
  }

  getSendPointOption(event) {
    this.props.dispatch(SelectedSendPoint({name: event.target.getAttribute('eventkey')}))
  }

  sendPointData() {
    this.props.dispatch(SubmitPoint(true))
    getCreateAircraftData(this.props.dispatch, this.props)
  }

  render() {
    let option
    if(this.props.SelectedSendPoint.name === 'spidertext') {
      option = 'Spidertxt'
    }else if (this.props.SelectedSendPoint.name === 'speed') {
      option = 'speed'
    }
    else if (this.props.SelectedSendPoint.name === 'rateclimb') {
      option = 'Rate Climb'
    }
    else if (this.props.SelectedSendPoint.name === 'ratedecent') {
      option = 'Rate Decent'
    }
    else {
      option = 'Select Point Type'
    }
    return (
      <div className="formWrapper row sendPoint">
        <div className="form-post col-xs-12">
            <div className="inputWrapper">
              <div className="col-xs-10">
                <h4>Send Point</h4>
                <div className="col-xs-12 no-padding pointType">
                  <DropdownButton
                    title={option}
                    id="Spidertxt"
                  >
                    <MenuItem eventkey={'spidertext'} onClick={this.getSendPointOption}>Spidertxt</MenuItem>
                    <MenuItem eventkey={'speed'} onClick={this.getSendPointOption}>SpeedUp / speedDown</MenuItem>
                    <MenuItem eventkey={'rateclimb'} onClick={this.getSendPointOption}>rateClimbOn / rateClimbOff</MenuItem>
                    <MenuItem eventkey={'ratedecent'} onClick={this.getSendPointOption}>rateDecentOn / rateDecentOff</MenuItem>
                  </DropdownButton>

                  <div className="col-xs-3 send no-padding">
                    <button onClick={this.sendPointData}>Send</button>
                  </div>
                </div>
              </div>
            </div>  
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  AircraftSerialNum: state.AircraftSerialNum,
  AircraftStartPointData: state.AircraftStartPointData,
  SelectedSendPoint: state.SelectedSendPoint
}))(SendPoint)

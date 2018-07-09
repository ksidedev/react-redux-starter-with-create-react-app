import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { AircraftSerialNum } from '../shared/actions'

class SelectSpider extends Component {
  constructor(props: any) {
    super(props)
    this.getAircraftSerialNum = this.getAircraftSerialNum.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  getAircraftSerialNum(event) {
    this.props.dispatch(AircraftSerialNum({serialNumber: event.target.value}))
  }

  handleError() {
    let error = {}
    if(this.props.SubmitPoint) {
      if(this.props.AircraftSerialNum.serialNumber.length === 0) {
        error = {errorClass: 'errorWrapper', errorMessage: 'This field can\'t be empty'}
      }
    }

    return error
  }

  render() {
    return (
      <div className={`formWrapper row ${this.handleError().errorClass}`}>
        <br />
        <div className="form-post col-xs-12">
            <div className="inputWrapper">
              <h4 className="col-xs-12">Select Spider</h4>
              <div className="col-xs-6">
                <p className="inputTitle">Option 1</p>
                <input
                  placeholder="Enter spider SN"
                  onKeyUp={this.getAircraftSerialNum}
                  name="name"
                  onChange={this.onChange}
                />
                <span className="error">{this.handleError().errorMessage}</span>
              </div>

              <div className="col-xs-6">
                <p className="inputTitle">Option 2</p>
                <DropdownButton
                  title={'Select Point Type'}
                  id="selectSpider"
                >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3" active>
                    Active Item
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>  
        </div>
    )
  }
}

export default connect(state => ({
  AircraftSerialNum: state.AircraftSerialNum,
  SubmitPoint: state.SubmitPoint
}))(SelectSpider)

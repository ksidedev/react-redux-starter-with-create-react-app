import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { AircraftStartPointData } from '../shared/actions'
import './Styles/StartPoint/StartPoint.css'

class StartPoint extends Component {
  constructor(props: any) {
    super(props)
    this.getAircraftStartPointData = this.getAircraftStartPointData.bind(this)
  }

  getAircraftStartPointData(event) {
    this.props.dispatch(AircraftStartPointData({tripId: event.target.value, longitude: this.longitudeInput.value, latitude: this.latitudeInput.value}))
  }

  render() {
    return (
      <div className="formWrapper startPoint row">
        <div className="form-post col-xs-12">
            <div className="inputWrapper">
              <div className="col-xs-12">
                <h4 className="inputTitle">Set Start Point</h4>
                <input
                  placeholder = "Enter Trip ID"
                  onKeyUp={this.getAircraftStartPointData}
                  name="name"
                  onChange={this.onChange}
                />
              </div>
            </div>  
            <div className="inputWrapper row">
              <div className="col-xs-12">
                <div className="col-xs-6">
                  <p className="inputTitle">Option 1: Set Longitude and Latitude</p>
                  <div className="col-xs-6 no-padding">
                    <input
                      ref={longitude => {
                        this.longitudeInput = longitude
                      }}
                      onKeyUp={this.getAircraftStartPointData}
                      placeholder= "Enter Longitude"
                      name="spiderSerialNumber"
                      onChange={this.onChange}
                    /> 
                  </div>

                  <div className="col-xs-6 no-padding">
                    <input
                     ref={latitude => {
                        this.latitudeInput = latitude
                      }}
                      onKeyUp={this.getAircraftStartPointData}
                      placeholder= "Enter Longitude"
                      name="spiderSerialNumber"
                      onChange={this.onChange}
                    /> 
                  </div>
                </div>

                <div className="col-xs-4">
                  <p className="inputTitle">Option 2: Select Airport</p>
                  <DropdownButton
                      title={'Select Airport'}
                      id="startPoint"
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
      </div>
    )
  }
}

export default connect(state => ({
  AircraftStartPointData: state.AircraftStartPointData
}))(StartPoint)

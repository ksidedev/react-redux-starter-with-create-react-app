import React, { Component } from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import '../Styles/StartPoint/StartPoint.css'

class RateClimb extends Component {
  
  render() {
    return (
      <div className="formWrapper col-xs-12 no-padding SpiderTxt">
        <div className="form-post">
            <div className="inputWrapper">
              <div className="col-xs-12">
                <p className="inputTitle">Start Point</p>
                <input
                  onKeyUp={this.getAircraftName}
                  name="name"
                  onChange={this.onChange}
                />
              </div>
            </div>  
            <div className="inputWrapper row">
              <div className="col-xs-12">
                <div className="col-xs-6">
                  <p className="inputTitle">Option 1</p>
                  <div className="col-xs-6 no-padding">
                    <input
                      name="spiderSerialNumber"
                      onChange={this.onChange}
                    /> 
                  </div>

                  <div className="col-xs-6 no-padding">
                    <input
                      name="spiderSerialNumber"
                      onChange={this.onChange}
                    /> 
                  </div>
                </div>

                <div className="col-xs-4">
                  <p className="inputTitle">Option 2</p>
                  <DropdownButton
                      title={'Select Point Type'}
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

export default RateClimb
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGetData } from '../shared/helpers'
import './Styles/GetData/GetData.css'

class GetData extends Component {
  constructor(props: any) {
    super(props)
    this.getData = this.getData.bind(this)
  }

  getData() {
    getGetData(this.props.dispatch, this.props.business)
  }

  render() {
    var names = this.props.GetData
    return (
      <div className="greyBg">
        <h5 className="heading">Retrieve data from API (GET): </h5>
        <div>
          <ul>
            {this.props.GetData &&
              Object.keys(names).map((item, index) => (
                <li key={index}>{names[index].name}</li>
              ))}
          </ul>
        </div>
        <a className={`btn btn-primary`} onClick={this.getData}>
          Get Data
        </a>
      </div>
    )
  }
}

export default connect(state => ({
  GetData: state.GetData
}))(GetData)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getOtherFakeData } from '../shared/helpers'
import './Styles/FormPost/FormPost.css'

class FormPost extends Component {

  	constructor(props: any) {
    super(props)

    this.state = {
      form: { name: '', movies: '' }
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.state.form[event.target.name] = event.target.value
    this.setState({ form: this.state.form })
  }

  onSubmit(event) {
    event.preventDefault()
    getOtherFakeData(this.props.dispatch, this.state.form)
  }

  render() {
    return (
      <div className="greyBg">
      <br />
      	<h5 className="heading">Form Post: </h5>
        <div className="form-post">
          <form onSubmit={this.onSubmit}>
            <input
              name="name"
              value={this.props.name}
              onChange={this.onChange} />
            <input
              name="movies"
              value={this.props.movies}
              onChange={this.onChange} />
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
          {this.props.theReturnedPostData.values && (
            <div>
              <p>
                Name: {this.props.theReturnedPostData.values.name} -{' '}
                {this.props.theReturnedPostData.values.movies}
              </p>
              <p>
                Time From Backend: {this.props.theReturnedPostData.createdAt}
              </p>
            </div>
          )}
          <div>
            {this.props.convertTime && (
              <p>Get currentTime: {this.props.convertTime}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  theReturnedPostData: state.theReturnedPostData
}))(FormPost)


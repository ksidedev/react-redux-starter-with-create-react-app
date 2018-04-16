import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOtherFakeData } from '../shared/helpers'
import './Styles/FormPost/FormPost.css'

class FormPost extends Component {
  constructor(props: any) {
    super(props)

    this.state = {
      form: { email: '', password: '' }
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({
      form: { email: this.emailInput.value, password: this.passwordInput.value }
    })
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
              placeholder="email"
              ref={input => {
                this.emailInput = input
              }}
              onChange={this.onChange}
            />
            <input
              name="movies"
              placeholder="password"
              ref={movies => {
                this.passwordInput = movies
              }}
              onChange={this.onChange}
            />
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
          {this.props.theReturnedPostData.error && (
            <div>
              <p>
                {this.props.theReturnedPostData.error}
              </p>
            </div>
          )}

          {this.props.theReturnedPostData.token && (
            <div>
              <p>
               Token: {this.props.theReturnedPostData.token}
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

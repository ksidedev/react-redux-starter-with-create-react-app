import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ChangeTextRedux } from './../shared/actions'

class Three extends Component {

  constructor(props: any) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }

  onSubmit(event) {
      event.preventDefault()
      this.props.dispatch(ChangeTextRedux('How are you?'))
    }

    render() {
        return(
            <div className="previewcomponent">
                <h5>Component 2 - Change Value</h5>
                <span onClick={this.onSubmit}>Click me: </span>
                {this.props.ChangeTextRedux}
            </div>
        );
    }
}

export default connect(state => ({
  ChangeTextRedux: state.ChangeTextRedux
}))(Three)


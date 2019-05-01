import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { helloWorldDefaultText, helloWorldDefaultValue } from '../../redux/actions/HelloWorld';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(helloWorldDefaultText('Text changes with redux successful.'));
  }

  changeValue(event) {
    const { dispatch } = this.props;
    dispatch(helloWorldDefaultValue('Text two with redux successful' ));
  }

  render() {
    const { helloWorldProps, helloWorldValue } = this.props;
    return (
      <>
        <p>Update part of redux store</p>
        <div className="col-50">
          <button onClick={this.onSubmit}> Text One</button>
          <p>{helloWorldProps}</p>
        </div>

        <div className="col-50">
          <button onClick={this.changeValue}> Text Two</button>
          <p>{helloWorldValue}</p>
        </div>
      </>
    );
  }
}

HelloWorld.defaultProps = {
  dispatch: () => {},
  helloWorldProps: '',
};

HelloWorld.propTypes = {
  dispatch: PropTypes.func,
  helloWorldProps: PropTypes.string,
};

const HelloWorldToProps = state => ({
  helloWorldProps: state.HelloWorld.helloWorldDefaultText.text,
  helloWorldValue: state.HelloWorld.helloWorldDefaultText.value,
});

export default connect(HelloWorldToProps, undefined)(HelloWorld);

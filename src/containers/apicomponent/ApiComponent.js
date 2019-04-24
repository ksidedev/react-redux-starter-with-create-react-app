import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData, postData, putData } from '../../api/api';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.getFetchExample = this.getFetchExample.bind(this);
    this.postFetchExample = this.postFetchExample.bind(this);
    this.putFetchExample = this.putFetchExample.bind(this);
  }

  getFetchExample(event) {
    event.preventDefault();
    this.getData = getData();
  }

  postFetchExample(event) {
    event.preventDefault();
    this.postData = postData();
  }

  putFetchExample(event) {
    event.preventDefault();
    this.putData = putData();
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <button type="button" color="default" onClick={this.getFetchExample}>Get</button>
        <button type="button" color="secondary" onClick={this.postFetchExample}> POST</button>
        <button type="button" color="primary" onClick={this.putFetchExample}>PUT</button>
      </div>
    );
  }
}

HelloWorld.defaultProps = {
  className: '',
};

HelloWorld.propTypes = {
  className: PropTypes.string,
};

const HelloWorldToProps = state => ({
  HelloWorldDefaultText: state.HelloWorld.HelloWorldDefaultText,
});

export default connect(HelloWorldToProps, undefined)(HelloWorld);

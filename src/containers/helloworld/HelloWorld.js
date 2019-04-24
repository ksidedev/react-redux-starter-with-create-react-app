import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { helloWorldDefaultText } from '../../redux/actions/HelloWorld';
import { HelloWorldStyled } from '../../components/helloworld/styles/js/styled';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(helloWorldDefaultText('Text changes with redux successfully.'));
  }

  render() {
    const { helloWorldProps } = this.props;
    return (
      <>
        <HelloWorldStyled
          className="style-override-example"
          onSubmit={this.onSubmit}
        />
        <p>{helloWorldProps}</p>
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
  helloWorldProps: state.HelloWorld.helloWorldDefaultText,
});

export default connect(HelloWorldToProps, undefined)(HelloWorld);

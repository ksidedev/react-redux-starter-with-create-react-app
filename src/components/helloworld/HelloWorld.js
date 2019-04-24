import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = (props) => {
  const { helloWorldText, onSubmit, className } = props;
  return (
    <div className={className}>
      <p onClick={onSubmit}>
        Click me
      </p>
      <p>{helloWorldText}</p>
    </div>
  );
};

HelloWorld.defaultProps = {
  helloWorldText: '',
  onSubmit: () => {},
  className: '',
};

HelloWorld.propTypes = {
  helloWorldText: PropTypes.string,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default HelloWorld;

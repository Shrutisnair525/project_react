import React, { Component } from 'react';

const TestFunction = (props) => <div> Hello {props.name}</div>;

TestFunction.propTypes = {
  name: React.PropTypes.string,
};

TestFunction.componentWillMount = () =>console.log('In TestFunction');
export default TestFunction;

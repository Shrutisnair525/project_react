import React from 'react';

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Component Update');
    return true;
  }

  handleClick() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <button style={{ background: this.context.color }} onClick = {this.handleClick.bind(this)}>
        {this.props.children} {this.state.value}
      </button>
    );
  }
}
Button.contextTypes = {
  color: React.PropTypes.string,
};

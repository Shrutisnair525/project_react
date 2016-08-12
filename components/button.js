import React from 'react';

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ liked: !this.state.liked });
    this.setState({ count: this.state.count + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Will update');
  }

  componentDidUpdate(prevProps, nextProps) {
    console.log('Did Update');
  }

  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    var style = {
      borderRadius: '5px',
      color: 'green',
    };
    return (
      <button style={style} onClick={this.handleClick}>
        You {text} this. Click to toggle. {this.state.count}
      </button>
    );
  }
}

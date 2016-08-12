import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.value}</h1>
      </div>
    );
  }
}

//ReactDOM.render(<Text/>, document.getElementById('text2'));

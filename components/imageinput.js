import React from 'react';

export default class Imageinput extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }


  render() {
    return (
     <div>
     <img src={this.props.value} alt="Image"/>
     </div>
);
  }
}

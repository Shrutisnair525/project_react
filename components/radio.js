import React from 'react';

export default class Radio extends React.Component {
  constructor(){
    super();
    {

      }
    }
  render() {
    return (
      <div>
        <input type="radio" name="radio" value="ABCD"/>ABCD <br />
        <input type="radio" name="radio" value="abcd"/> abcd<br />
        <input type="radio" name="radio" value="1234"/> 1234
      </div>
    );
  }
}

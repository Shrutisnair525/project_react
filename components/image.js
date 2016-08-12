import React from 'react';
//import ReactDOM from 'react-dom';

import Imageinput from './imageinput';

export default class Image extends React.Component{
  render() {
    return (
     <div>
      <Imageinput value='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBBCBJITuAyTUMsgsa7mp_NDH3h3CJNpGF6Xnsz4WbGw9EGah5'/>
    </div>
   );
  }
}

//ReactDOM.render(<Image/>, document.getElementById('image'));

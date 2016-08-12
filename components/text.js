import React from 'react';
import Styles from '/home/shruti/project/project_react/Style.css';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import TestFunction from './testFunction';

export default class Text extends React.Component {
  constructor() {
    super();
    this.state = {
        name: 'Sample text component',
      };
  }

  render() {
    return (
     <div className={Styles.text}>
       <h2>{this.state.name}</h2>
       <ButtonToolbar>
         <Button bsStyle="warning" bsSize="large" >Sample1</Button>
         <Button bsstyle="success" bsSize="large" active>Sample2</Button>
       </ButtonToolbar>
       <Button bsStyle="link" bsSize="small" href="www.google.com">Sample3</Button>
       <Button bsStyle="info" bsSize="small" block disabled>Sample4</Button>
         <ButtonToolbar>
           <ButtonGroup>
             <Button bsStyle="primary">1</Button>
             <Button bsStyle="default">2</Button>
             <Button bsStyle="primary">3</Button>
             <Button  bsStyle="default">4</Button>
           </ButtonGroup>

           <ButtonGroup vertical>
             <Button bsStyle="primary">5</Button>
             <Button bsStyle="default">6</Button>
             <Button bsStyle="primary">7</Button>
             <DropdownButton title="Numbers" id="1" bsStyle="warning">
               <MenuItem eventKey="1" >8</MenuItem>
               <MenuItem eventKey="2">9</MenuItem>
             </DropdownButton>
           </ButtonGroup>
         </ButtonToolbar>
           <TestFunction name= 'world'/>
       </div>
   );
  }
}

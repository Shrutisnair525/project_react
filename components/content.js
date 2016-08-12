import React from 'react';
import Header from './header';
import Text from './text';
import Image from './image';
import Footer from './footer';
import Button from './button';
import Radio from './radio';
import Overlay from './overlay';
import TestFunction from './testFunction';
import MessageList from './MessageList';

export default class Content extends React.Component {

  render() {

    return (
     <div>
        <Header/>
        <Text/>
        <Image/>
        <br/>
        <Button/>
        <Overlay/>
        <Footer/>
        <Radio/>
        <TestFunction name= 'world'/>
        <MessageList/>
      </div>
);
  }
}

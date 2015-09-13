/*global document:false*/
import React from 'react';
import classNames from '../src/classNames';

@classNames
class App extends React.Component {
  render() {
    return (
      <div>
        <div classNames='Demo'/>
        <div classNames={ ['main', false && 'hidden', true && 'visible'] } className='other-class'/>
      </div>
    );
  }
}

const content = document.getElementById('content');

React.render(<App/>, content);

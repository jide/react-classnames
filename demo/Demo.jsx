import React from 'react';

//import { factory } from '../src';
//const classNames = factory(React, { separator: '--', propsName: 'cx' });

import classNames from '../src';

@classNames
export default class Demo extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = {
      toggled: false
    };
  }

  handleToggle() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    return (
      <div className='test' classNames='test2 test3'>
        <p>This is the root of the component <code>Demo</code>. It will get the <code>Demo</code> class and can have other <code>className</code> and <code>classNames</code> props.</p>
        <p><button onClick={ ::this.handleToggle }>Toggle</button></p>
        <p classNames={ ['highlight', this.state.toggled && 'toggled'] }>
          This paragraph has classNames that will be prefixed with <code>Demo</code>. It is blue when toggled.
        </p>
      </div>
    );
  }

};

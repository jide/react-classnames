[![build status](https://secure.travis-ci.org/synchronized/react-classnames.png)](http://travis-ci.org/synchronized/react-classnames) [![bitHound Score](https://www.bithound.io/github/synchronized/react-classnames/badges/score.svg)](https://www.bithound.io/github/synchronized/react-classnames) [![Dependency Status](https://david-dm.org/synchronized/react-classnames.svg)](https://david-dm.org/synchronized/react-classnames)
# react-classnames

```js
import classNames from '../src';

@classNames
export default class Demo extends React.Component {

  render() {
    return (
      <div>
        <p classNames='highlight'>
          Some child
        </p>
      </div>
    );
  }

};
```

Generates :
```js
<div class='Demo'>
  <p class='Demo__highlight'>
    Some child
  </p>
</div>
```

Use your beloved preprocessor, e.g. less :
```less
.Main {
  &__highlight {
    color: blue;
  }
}
```

Customize the component namespace :
```js
@classNames('my-demo-component')
```

Use the factory to customize :
```js
import { factory } from '../src';
const classNames = factory(React, { separator: '--', propsName: 'cx' });
```

Cleanly wrapped :
![alt tag](https://raw.githubusercontent.com/jide/react-classnames/master/screenshot.png)

All of this works :
```js
<div classNames='some-class'/>
<div classNames='some-class some-other'/>
<div classNames={ ['some-class', 'some-other'] }/>
<div className='regular-class other-regular-class' classNames={ ['some-class'] }/>
<div classNames={ [true && 'some-class'] }/>
```

A more complete example :
```js
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
```

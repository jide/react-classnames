## ClassNames

### Description
A decorator to create add a convenient classNames prop.

### Demo
`npm start dev` then visit http://127.0.0.1:3000

### Usage
```js
import classNames from 'react-classnames';

@classNames
export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <div classNames='Demo'/>
        <div classNames={ ['main', false && 'hidden', true && 'visible'] } className='other-class'/>
      </div>
    );
  }
};
```

### Customize
Use the factory to customize :
```js
import { factory } from 'react-classtree';
const classes = factory({ propName: 'classes' });
```

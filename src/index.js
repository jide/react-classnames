import React from 'react';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const factory = ({ propName = 'classNames', separator = '__' }) => {
  return arg => {
    const wrapComponent = componentName => WrappedComponent => {
      const convertToClassName = (element, isRoot = false) => {
        if (typeof element.type ==='string' && element.props) {
          let props = {};

          if (element.props[propName] || isRoot) {
            props.className = [isRoot && componentName]
              .concat(element.props.className)
              .concat(element.props[propName])
              .filter(className => !!className)
              .map(className => isRoot ? className : `${componentName}${separator}${className}`)
              .join(' ');
          }

          if (element.props.children) {
            props.children = Array.isArray(element.props.children) ?
              element.props.children.map(child => convertToClassName(child)) :
              convertToClassName(element.props.children);
          }

          return React.cloneElement(element, props);
        }
        else {
          return element;
        }
      };

      const displayName = `${propName}(${getDisplayName(WrappedComponent)})`;

      return class extends WrappedComponent {
        static displayName = displayName;

        render(...args) {
          return convertToClassName(super.render(...args), true);
        }
      };
    };

    return typeof arg === 'string' ? wrapComponent(arg) : wrapComponent(getDisplayName(arg))(arg);
  };
};

export default factory({});
export { factory };

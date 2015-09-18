import React from 'react';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const factory = ({ propName = 'classNames' }) => {
  return WrappedComponent => {
    const convertToClassName = (element) => {
      if (element.props) {
        let props = {};

        if (element.props[propName]) {
          props.className = [element.props.className]
            .concat(element.props[propName])
            .filter(className => !!className)
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

    return class classNames extends WrappedComponent {
      static displayName = displayName;

      render(...args) {
        return convertToClassName(super.render(...args), true);
      }
    };
  };
};

export default factory({});
export { factory };

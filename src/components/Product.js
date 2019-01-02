// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return <div> {this.props.weight}</div>
  }
}

function weightChecker(props, propName, componentName) {
    if (Number.isInteger(props[propName]) && (props[propName] >= 80 && props[propName] <= 300)  ) {
      return null
    }

    return new Error(propName + ' in ' + componentName + " is longer than 140 characters");
}

function createCustomPropType(isRequired) {
  // The factory returns a custom prop type
  return function(props, propName, componentName) {
    const prop = props[propName];
    if (prop == null) {
      // Prop is missing
      if (isRequired) {
        // Prop is required but wasn't specified. Throw an error.
        throw new Error('required');
      }
      // Prop is optional. Do nothing.
    } else {
      // Put your validation logic here...
      if (Number.isInteger(props[propName])) {
        return null
      } else if (props[propName] >= 80 && props[propName] <= 300) {
        return null
      }
      return new Error(propName + ' in ' + componentName + " is longer than 140 characters");
    }
  }
}

const customPropType = createCustomPropType(false);
customPropType.isRequired = createCustomPropType(true);

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  // weight: PropTypes.number.isRequired,
  weight: customPropType.isRequired
};

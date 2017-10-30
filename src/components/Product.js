import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool.isRequired,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName, componentName) {
    if (((Number.isInteger(props[propName]))) && (props[propName] < 80 || props[propName] > 300)) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
    }
    else {
      PropTypes.checkPropTypes({
        weight: PropTypes.number.isRequired
      }, {weight: props[propName]}, 'prop', 'Product');      
    }
  }
};


export default Product;
// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: withinRange,
}


function withinRange (props, propName, componentName) {
  if (typeof props[propName] === 'undefined') {
    return new Error(
      'Required prop `' + propName + '` was not specified in `' + componentName + '`.'
    );
  } else if (typeof props[propName] !== 'number') {
    return new Error(
      'Required prop `' + propName + '` should be a number in `' + componentName + '`.'
    );
  } else if (props[propName] < 80 || props[propName] > 300) {
    return new Error(
      'Invalid value for `' + propName + '` in `' + componentName + '`.'
    );
  }
}

export default Product;

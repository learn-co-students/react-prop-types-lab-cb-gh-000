import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Producer: {this.props.producer}</div>
        <div>hasWatermark: {this.props.hasWatermark ? 'Yes' : 'No'}</div>
        <div>Color: {this.props.color}</div>
        <div>Weight: {this.props.weight}</div>
      </div>
    );
  }
}

Product.defaultProps = {
  producer: '',
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let value = props[propName];

    if(typeof(value) !== 'number') {
      console.log(value);
      return new Error('Weight must be a number');
    }

    if (value < 80 || value > 300) {
      return new Error(
        'Weight must be bewteen 80 and 300 (inclusive).'
      );
    }
  }
}

export default Product;

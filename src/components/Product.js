// Code Product Component Here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return (
      <div>
        { this.props.name }
        { this.props.producer }
        { this.props.color }
        { this.props.weight }
      </div>
      )
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
  weight: function(props, propName, componentName) {
    let weight = props[propName];
    
    if (weight === undefined) {
      return new Error("Sorry you must include a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Sorry weight must be a number.");
    }

    if(weight < 30 || weight > 800) {
      return new Error('Invalid');
    }
  }
};

export default Product;
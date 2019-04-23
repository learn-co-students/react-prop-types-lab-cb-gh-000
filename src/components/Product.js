// Code Product Component Here

// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return <div>
    <h2>{this.props.name}</h2>
    <h2>{this.props.producer}</h2>
    <h2>{this.props.hasWatermark}</h2>
    <h2>{this.props.color}</h2>
    <h2>{this.props.weight}</h2>
    </div>
  }
}

const weight_range = [];

for (var i=80; i<=300; i++){
  weight_range.push(i);
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired    /* function(props, propName, componentName) {
    let weight = props[propName];

    if (weight === undefined) {
      return new Error('You must give a value between 80 and 300.')
    }
    if (isNaN(weight)) {
      return new Error('You must give a value between 80 and 300.');
    }
    if (weight > 80 && weight < 300) {
      return new Error('You must give a value between 80 and 300.');
    }
  } */
};

Product.defaultProps = {
  hasWatermark: false,

}

export default Product;

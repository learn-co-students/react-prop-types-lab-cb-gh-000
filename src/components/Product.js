// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark ? 'yes' : 'no'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

export default Product;

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {

    if (props[propName] === undefined) {
       return new Error('The `weight` prop is required.');
     }

    if (isNaN(props[propName])) {
       return new Error('The `weight` prop is not a number.');
     }

    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid prop');
    }
  }
};

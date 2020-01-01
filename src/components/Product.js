import React from 'react'
import PropTypes from 'prop-types'

const MIN = 80
const MAX = 300


function rangeValidation(props, propName, componentName) {
  // Self implement is required
  if (props[propName] == null) {
    return new Error('Prop is required');
  }
  // Must be number type
  else if (typeof(props[propName]) != 'number') {
    return new Error('Prop must be a number');
  }
  else if(props[propName] < MIN || props[propName] > MAX) {
    return new Error('Invalid');
  }
}

class Product extends React.Component {
    render() {
      <div>
        <p>Product Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermarked: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: rangeValidation
  // weight: PropTypes.number.isRequired
}

export default Product

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    return (
      <ul className="product">
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark ? "Has Water Mark" : "not has Water Mark"}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

const weightRange = Array.apply(null, {length: 219}).map(Number.call, Number).map((x)=> x+81);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired
}

import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div className = "product">
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

function vWeight(props, propName) {
  const weight = props[propName];

  if (weight === undefined) {
    return new Error('The `weight` prop is required.');
  }

  if (isNaN(weight)) {
    return new Error('The `weight` prop is not a number.');
  }

  const isValidWeight = weight > 80 && weight < 300;

  if (!isValidWeight) {
    return new Error('The `weight` prop should range between 80 and 300.');
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: vWeight
}

module.exports = Product;

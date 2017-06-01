import React from 'react';

export default class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Has Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</li>
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
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    let weight = props[propName]
    if (weight === undefined)
      return new Error(`Invalid prop '${propName}', is required.`)

    if (isNaN(weight))
      return new Error(`Invalid prop '${propName}', must be a number.`)

    let isValid = weight > 80 && weight < 300
    if (!isValid)
      return new Error(`Invalid prop '${propName}', must be in range of 80 and 300.`)
  }
};

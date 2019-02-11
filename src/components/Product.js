// Code Product Component Here
import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
      <div>
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

let weight_range = [];
for (var i = 80; i <= 300; i++) {
  weight_range.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
};

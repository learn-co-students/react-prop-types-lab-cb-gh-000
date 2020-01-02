// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return <div></div>
  }
}
let weight_range = [];
for (let i = 80; i <= 300; i++) {
  weight_range.push(i);
}

// React.PropTypes.oneOf(weight_range).isRequired
Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: PropTypes.oneOf(weight_range).isRequired
};

Product.defaultProps = {
  hasWatermark: false
};

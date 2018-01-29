// Code Product Component Here
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.producer}
        {this.props.color}
        {this.props.weight}
      </div>
      );
  }
}

Product.defaultProps = {
  hasWatermark: false,
}


function range(lowEnd,highEnd){
    var arr = [],
    c = highEnd - lowEnd + 1;
    while ( c-- ) {
        arr[c] = highEnd--;
    }
    return arr;
}

var weightRange = range(80,300);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'slamon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired,
}


export default Product;
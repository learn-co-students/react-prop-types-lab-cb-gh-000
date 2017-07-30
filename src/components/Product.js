// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <p>name is {this.props.name}, producer is {this.props.producer}, Watermar available {this.props.hasWatermark}, Color is {this.props.color}, weight is {this.props.weight}</p>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: function(props, propName, component){
    let weight = props[propName];

    if (weight === undefined) {
      return new Error("Weight has to be entered");
    }

    if (isNaN(weight)) {
      return new Error("Weight must be a number.");
    }

    if (weight < 80 || weight > 300) {
      return new Error("Must be within range of 80 to 300")
    }
  }
};

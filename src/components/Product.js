// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div className="product">
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>hasWatermark: {this.props.hasWatermark?'True':'False'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark:false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
}

function checkWeight(props, propName, componentName){
  let val = props[propName];
  if(val === undefined)
    return Error('Number not given');
  if(typeof(val) !== 'number')
    return Error('Not a number');
  if(val < 80 || val > 300)
    return Error('Out of range');
  return null;
}

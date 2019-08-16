import React from 'react';
import PropTypes from 'prop-types';

 export default class Product extends React.Component{
  render(){
    return(
      <div className="dunder">
        <h3>{this.props.name}</h3>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}



Product.defaultProps = {
  hasWatermark: false,
}

var weight_range = [];
for (var i=80; i<=300; i++){
  weight_range.push(i);
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired  /*function(props, propName, componentName){
    let weight = props[propName];
    if (weight == undefined){
        return new Error ('Must include wight');
    }
    return weight >= 80 && weight <= 300 ? null : new Error("must be within the range!");
  } */
};

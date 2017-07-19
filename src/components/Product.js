import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    const check = weight >= 80 && weight <= 300;
    if(weight === undefined){
      return new Error('Please enter a valid weight.');
    }
    else if(isNaN(weight)){
      return new Error('Please enter a valid number for weight.');
    }
    else if(!check){
      return new Error('Please enter a valid weight between 80 and 300.');
    }
  }
};

export default Product;

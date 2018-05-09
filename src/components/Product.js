// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class  Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, Product){
    if(props[propName]){
     let value = props[propName]
      if(typeof value === "number"){
        return (value < 80 || value > 300) ? new Error( `Wat da fuck.` ) : null
      } else{
        return new Error( `I dont know.` )
      }
    }
    return new Error('Gosh')
  }
};

export default Product;

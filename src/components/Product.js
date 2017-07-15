// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return(
        <div>
          <h1>Product name: {this.props.name}</h1>
          <h2>Producer: {this.props.producer ? this.props.producer : ' unavailable'} </h2>
          <p>Has watermark: {this.props.hasWatermark ?  'yes' : ' no'}</p>
          <p>Color:</p>
          <ul>
            <li>{this.props.color}</li>
          </ul>
          <p>Weight: {this.props.weight}</p>
        </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {

     const weight = props[propName];

   if (weight === undefined) {
     return new Error('The ' + weight + 'prop is required. ');
   }

   if (isNaN(weight)) {
     return new Error('The' + weight + 'prop is not a number.');
   }

   const isValidWeight = weight > 80 && weight < 300;

   if (!isValidWeight) {
     return new Error('The' + weight + 'prop should range between 80 and 300.');
   }
  }

}

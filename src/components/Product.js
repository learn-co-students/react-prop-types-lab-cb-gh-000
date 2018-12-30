import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']),
  weight: function(props, propName, componentName) {
   if(props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.');
   }
 }
};

export default Product;

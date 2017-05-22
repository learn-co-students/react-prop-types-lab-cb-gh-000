const React = require('react');

class Product extends React.Component {
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

  // defaultProps: {
  //   
  // }
}

Product.defaultProps = {
  hasWatermark: false
}

function validWeight(props, propName) {  
  
    const value = props[propName];        
    // check for error
    let isCorrectWeight = value > 80 && value < 300;
    
    if (value === undefined) {
      return new Error('No weight entered');
    }

    if (isNaN(value)) {
      return new Error('The `value` prop is not a number.');
    }

    if (!isCorrectWeight) {
      return new Error('Too small or too big');
    // } else if (value >= 300) {
    //   return new Error('Too big');
    }
}

Product.propTypes = {
  weight: validWeight,
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  
}

module.exports = Product;
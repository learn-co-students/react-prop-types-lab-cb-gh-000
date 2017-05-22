const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
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
  
    let value = props[propName];        
    // check for error
    let isCorrectWeight = weight > 80 && weight < 300;
    
    if (typeof(value) !== number) {
      return new Error('Not a number');
    } 

    if (!isCorrectWeight) {
      return new Error('Too small or too big');
    // } else if (value >= 300) {
    //   return new Error('Too big');
    }

    if (value === undefined) {
      return new Error('No weight entered');
    }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    
      let value = props[propName];        
      // check for error
      let isCorrectWeight = value > 80 && value < 300;
      
      if (typeof(value) !== number) {
        return new Error('Not a number');
      } 
  
      if (!isCorrectWeight) {
        return new Error('Too small or too big');
      // } else if (value >= 300) {
      //   return new Error('Too big');
      }
  
      if (value === undefined) {
        return new Error('No weight entered');
      }
  }
}

module.exports = Product;
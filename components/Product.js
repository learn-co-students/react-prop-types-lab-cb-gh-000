const React = require('react');


class Product extends React.Component {

    render() {
        var a = this.props.hasWatermark ? "😎" : "😛"
        return (<div>
            <h1 style={{ color: this.props.color }}>{this.props.name}</h1>
            <h3 style={{ color: this.props.color }}> {this.props.producer}</h3>
            <h2>{a}</h2>
            <h5>{this.props.weight}</h5>
        </div>)
    }


}
Product.defaultProps = {
   hasWatermark:false,
   colors:['black', 'red']
}
let weightRange = createChainableTypeChecker(weightRangeF);
function weightRangeF(props, propName) {


  if (props[propName]) {
    let value = props[propName];
    console.log(value);
    if(typeof value !== "number"){
      return new Error(propName +" jaabiri number")
    }else{
        return 80 < value && value < 300 ? null : new Error(propName + ' in '+ " should be between 80 and 300");
    }
  }



}
function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          ("Required " + locationName + " `" + propName + "` was not specified in ") +
          ("`" + componentName + "`.")
        );
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  let chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

Product.propTypes = {
   name:React.PropTypes.string.isRequired,
   producer:React.PropTypes.string,
   hasWatermark:React.PropTypes.bool,
   color:React.PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
   weight:weightRange.isRequired
}
module.exports = Product;

const React = require('react');
const ReactDOM = require('react-dom');
const Product = require('./components/Product');

ReactDOM.render(
  <Product name={"undefined"} producer="PaperCo" color="eggshell-white" weight={"210"} />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!

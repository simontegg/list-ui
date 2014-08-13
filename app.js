var mercury = require('mercury');
var Observ = require('observ');

require('../index.css');
require('./item.css');

var List = require('../');

var data = [
  {name: 'simon tegg'},
  {name: 'mikey williams'},
  {name: 'craig ambrose'}
];


var list = List({
  listItems: data,
  Item: require('./Person'),
});

mercury.app(document.body, list.state, List.render);

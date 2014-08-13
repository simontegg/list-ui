var h = require('virtual-hyperscript');
var input = require('geval/multiple');
var Observ = require('observ');
var ObservStruct = require('observ-struct');
var event = require('value-event/event')

function Person (d) {
  var state = ObservStruct({
    aName: d.name
  });

  console.log('person', d)
  return { state: state };
}

Person.render = function (state) {
  return h('div.list-item', state.aName)
  ;
}

module.exports = Person;

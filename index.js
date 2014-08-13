var debug = require('debug')('grid-ui');
var h = require('virtual-hyperscript');
var input = require('geval/multiple');
var event = require('value-event/event')
var valueEvent = require('value-event/value');
var changeEvent = require('value-event/change');
var Observ = require('observ');
var ObservStruct = require('observ-struct');
var ObservArray = require('observ-array');
var Item = require('./')

function list (options) {

  // var events = input(["edgeClick", "shapeX", "shapeY"]);

  // embed items in list as Item components
  var listItems = options.listItems;
  listItems.forEach(function (item, index) {
    listItems[index] = options.Item(item).state;
  });

  // setup state
  var state = ObservStruct({
    Item: Observ(options.Item),
    list: ObservArray(listItems)
  });

  return { state: state};
}

list.render = function (state) {
  debug("render", state);
  return h('ul.list', {}, state.list.map(function(item, index){
    return h('li', {}, state.Item.render(item))
  }));
};

module.exports = list;

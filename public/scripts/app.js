"use strict";

console.log('App.js is running!');
var app = {
  title: 'Did you fart loudly?',
  subtitle: 'Acceptable responses',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Hey Matt PFFFFFTTTTTTTTTT! (embarassed)"), /*#__PURE__*/React.createElement("li", null, "no way, (silent..pfffffffff)")));
var user = {
  name: 'sarah sugar smacks',
  age: 23,
  location: 'Candyland'
};
var getLocation = function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
};
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age > 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

"use strict";

console.log('App.js is running!');
var app = {
  title: 'Did you fart loudly?',
  subtitle: 'Acceptable responses',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    console.log(app.options);
    renderIndecisionApp();
  }
};
var onMakeDecision = function onMakeDecision() {
  // generate random number
  // return that element from options array
  var length = app.options.length;
  var randomIndex = Math.floor(Math.random() * length);
  var option = app.options[randomIndex];
  alert(option);
};
var onClick = function onClick() {
  app.options = [], renderIndecisionApp();
};
var appRoot = document.getElementById('app');
var numbers = [9023, 8452, 8];
var renderIndecisionApp = function renderIndecisionApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What should I do?"), /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};
renderIndecisionApp();

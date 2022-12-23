import React from 'react';
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
  constructor() {
    this.name = 'Mike'
  }
  getGreeting() {
    return `Hi. My name is ${this.name}`
  }
}

const mikeOld = new OldSyntax();
console.log(mikeOld.getGreeting());

class NewSyntax {
  name = 'Mike Mike Mike Mike Mike';
  getGreeting = () => {
    return `Hi. My name is ${this.name}`
  }
}
const mikeNew = new NewSyntax();
const newGetGreeting = mikeNew.getGreeting;
console.log(newGetGreeting());
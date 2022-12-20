class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      name: 'Visibility Toggle',
      visibility: false,
      hiddenMessage: 'Congrats! You found me hiding right here',
      buttonText: 'Show details'
    };
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleToggle}>Test</button>
        <p>{this.state.visibility && this.state.hiddenMessage}</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityApp />, document.querySelector('#app'))

// const app = {
//   name: 'Visibility Toggle',
//   toggle: true,
//   toggleMessage: 'Congrats!  You found me hiding right....here',
//   buttonText: 'Show details'
// }

// const onClick = () => {
//   app.toggle = !app.toggle;
//   const hideOrShow = app.toggle ? 'Show' : 'Hide'
//   app.buttonText = `${hideOrShow} details`
//   render();
// }

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>{app.name}</h1>
//       <button onClick={onClick}>{app.buttonText}</button>
//       <p>{app.toggle ? undefined : app.toggleMessage}</p>
//     </div>
//   )
//   ReactDOM.render(jsx, appRoot)
// }

// const appRoot = document.querySelector('#app')

// render();
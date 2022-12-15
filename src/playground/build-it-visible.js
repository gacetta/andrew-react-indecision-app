const app = {
  name: 'Visibility Toggle',
  toggle: true,
  toggleMessage: 'Congrats!  You found me hiding right....here',
  buttonText: 'Show details'
}

const onClick = () => {
  app.toggle = !app.toggle;
  const hideOrShow = app.toggle ? 'Show' : 'Hide'
  app.buttonText = `${hideOrShow} details`
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>{app.name}</h1>
      <button onClick={onClick}>{app.buttonText}</button>
      <p>{app.toggle ? undefined : app.toggleMessage}</p>
    </div>
  )
  ReactDOM.render(jsx, appRoot)
}

const appRoot = document.querySelector('#app')

render();
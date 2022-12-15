console.log('App.js is running!')

const app = {
  title: 'Did you fart loudly?',
  subtitle: 'Acceptable responses',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ul>
      <li>Hey Matt PFFFFFTTTTTTTTTT! (embarassed)</li>
      <li>no way, (silent..pfffffffff)</li>
    </ul>
  </div>
);

const user = {
  name: 'sarah sugar smacks',
  age: 23,
  location: 'Candyland'
}

const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
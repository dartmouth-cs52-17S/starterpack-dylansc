import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Controls from './containers/controls';
import Counter from './containers/counter';

import './style.scss';
import reducers from './reducers';

// import App from './components/app';


// import ReactDOM from 'react-dom';
// this creates the store with the reducers, and does some other stuff to initialize devtools
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
      <Counter />
      <Controls />
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('main'));

// /TIM VERSION
// let count = 0;
// function update() {
//   $('#main').html(count);
//   count++;
// }
// setInterval(update, 1000);

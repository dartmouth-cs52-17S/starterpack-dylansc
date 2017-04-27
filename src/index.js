import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div className="test">All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));


// /TIM VERSION
// let count = 0;
// function update() {
//   $('#main').html(count);
//   count++;
// }
// setInterval(update, 1000);

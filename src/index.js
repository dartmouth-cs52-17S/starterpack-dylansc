// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// console.log('starting up!');
let num = 0;

setInterval(() => {
  $('#main').html(`Hello, you've been on this page for ${num} seconds.`);
  console.log('starting up!');
  num += 1;
}, 1000);

$('#main').html('Here we go!');

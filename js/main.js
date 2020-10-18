'use strict';
import * as weather from './weather.js';
import * as greeting from './greeting.js';
import * as todo from './todo.js';
import * as clock from './clock.js';
import * as bg from './bg.js';

function init() {
  weather.init();
  greeting.init();
  todo.init();
  clock.init();
  bg.init();
}

init();
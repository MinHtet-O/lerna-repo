"use strict";

// 1
function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num+1;
}

// 2
module.exports = randomNumber;
const eqArrays = require('./eqArrays')
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`🤑🤑🤑 ${array1} === ${array2}`);
  } else {
    console.log(`🥵️🥵️🥵️ ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual

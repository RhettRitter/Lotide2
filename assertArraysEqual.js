const assertArraysEqual = function(actual,expected) {

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🥵️Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};
console.log(`🤑Assertion Passed: ${actual} === ${expected}`);
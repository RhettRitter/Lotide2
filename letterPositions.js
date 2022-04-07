const eqArrays = function(array1,array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };
const assertArraysEqual = function(actual,expected) {

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🥵️Assertion Failed: ${actual} !== ${expected}`);
    }
    if (actual[i] !== expected[i]) {
      console.log(`🤑Assertion Passed: ${actual} === ${expected}`);
    }
  }
};
  
const letterPositions = function(sentence) {
  const location = {};

  for (let i = 0; i < sentence.length; i++) {// loop through string
       
    if (sentence[i] !== ' ') {            // if index is not a space move to next parameter
       
      if (!location[sentence[i]]) {      // if it doesn,t matches the argument move to array
        location[sentence[i]] = [i];
        
      } else {                   
        location[sentence[i]].push(i);     // if matches move to object
      }
    }
  }
  return location;
};
result = letterPositions("hello");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);

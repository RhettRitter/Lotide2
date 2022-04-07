const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵️Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = array1.length; i--;) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
    // returning false if the object length is not identical.
  } else {
    for (let i in object1) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
        if (eqArrays(object1[i], object2[i]) === false) {
          return false;
          //check for both objects to be an array and ensure the elements of those arrays match
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
             
    }
    return true;
  }
};
const assertObjEqual = function(actual,expected) {
  const inspect = require('util').inspect;
  if (actual[i] !== expected[i]) {
    console.log(`🥵️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  if (actual[i] === expected[i]) {
    console.log(`🤑Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

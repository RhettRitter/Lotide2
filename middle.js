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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed: ${actual} === ${expected}`); {
      if (actual !== expected) {
        console.log(`🥵️Assertion Failed: ${actual} !== ${expected}`);
      }
    }
  }
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
const middle = function(arr) {
  if (!arr.length)
    return;
  const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  }
  else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
};
assertEqual(assertArraysEqual(middle([1,2,3,4,5,6,7])));
        
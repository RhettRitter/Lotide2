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
    if (actual[i] === expected[i]) {
      console.log(`🤑Assertion Passed: ${actual} === ${expected}`);
    }
  }
};

// This function should take in a source array and a itemsToRemove array.
// It should return a new array with only those elements
// from source that are not present in the itemsToRemove array.
const without = function(array1, array2) {
  let results = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      results.push(element);
    }
  }
  return results;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1,2,3], [3,4]));
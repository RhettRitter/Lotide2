// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed: ${actual} === ${expected}`); {
      if (actual !== expected) {
        console.log(`🥵️Assertion Failed: ${actual} !== ${expected}`);
      }
    }
  }
};
// Test Code

assertEqual(1,1);
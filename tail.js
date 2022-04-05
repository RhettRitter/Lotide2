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
function tail(array) {
  let series = [];
  for (let i = 1; i < array.length; i++) {
    series.push(i);
  }
  return series;
}
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
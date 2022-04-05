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
function head(array){
    console.log(array[0])
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
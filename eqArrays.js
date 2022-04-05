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
  
const eqArrays = function([],[]){
    for (let i = 0; i < eqArrays.length; i++){
        if (eqArrays[0] === eqArrays[1]){
              return true; 
        }
        if (eqArrays[0] !== eqArrays[1]){
            return false;
        }
          }
      }
  

  // Test Code
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
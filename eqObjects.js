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

//console.log(Object.keys(object2))

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba));
//assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false);

const rhett = {height: 'tall', width: 'slim', humour: 'low'};
const joel = {height: 'small', width: 'large', humour: 'none'};
//assertEqual(eqObjects(rhett, joel), false);
//assertEqual(eqObjects(rhett, rhett), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, cd2), false); // => false
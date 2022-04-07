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
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤑 ${arr1} === ${arr2}`);
  } else {
    console.log(`🥵️ ${arr1} !== ${arr2}`);
  }
};
  
const map = (array, callback) => {
  /*console.log('array: ', array);
  console.log('callback: ', callback);*/
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // true

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]); // true

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [ 'g', 'c', 't', 'm', 't' ]); // false
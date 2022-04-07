const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
  
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤑🤑🤑 ${arr1} === ${arr2}`);
  } else {
    console.log(`🥵️🥵️🥵️ ${arr1} !== ${arr2}`);
  }
};
  
const takeUntil = (array, callBack) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]); {

      if (callBack(array[i])) {
        result = array.slice(0, i);
        return result;
      }
    }
  }
};

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); //true
//console.log(results2);
//
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, num => num < 0);
//console.log(results1);
//
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2, 4, 5]); // false
assertArraysEqual(results1, [1, 2, 5, 7, 2,]); // true
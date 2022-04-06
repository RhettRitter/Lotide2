const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵️Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(shows, value) {
  //for statement to sort the object
  for (const key in shows) {
    if (shows[key] === value) {
      return key;
    // if statement that compares the show key to the value being tested against.
    }
  }
};
//Object for test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'drama');
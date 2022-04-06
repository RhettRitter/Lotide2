const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed: ${actual} === ${expected}`); {
      if (actual !== expected) {
        console.log(`🥵️Assertion Failed: ${actual} !== ${expected}`);
      }
    }
  }
};
const countLetters= function(string) {
  const counter = {}
  string = string.replace(' ', '');
  for (const letter of string) {
    if (!counter[letter])
         counter[letter] = 1;
    else
         counter[letter]++;
    //console.log(counter)
      }
     return counter;
    };
    const result1 = countLetters("lighthouse in the house");
    assertEqual(result1["l"], 1);
    assertEqual(result1["g"], 1)
    assertEqual(result1["0"], 2)
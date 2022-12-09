function isPalindrome(word) {
  // Write your algorithm here
    // Write a function isPalindrome that will receive one argument, a string.
  // Your function should return true if the string is a palindrome
  // (that is, if it reads the same forwards and backwards, like "mom" or "racecar"),
  // and return false if it is not a palindrome.
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
//need to first split the given word to a string of characters
//need to then reverse the string so that it starts with the last characters as the first characters in that order
// then the string characters are then joined together by use of of .join 

/*
  Add written explanation of your solution here
  // the return word should equal the reversed word. i.e the word mom , when reversed should always read 
  mom,
  //the function i used is such that when the word is called , it first splits into a string of characters, i.e"m" "o" "m",
  the string characters are then reversed such that the word at the last index starts and the first indexs' word is the last.
  then the string is then joined together to form a word.
  if the word on reversing equal the inital word, then its a palindrome and so the fucntion on console.log()
  returns true else it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;

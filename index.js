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
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

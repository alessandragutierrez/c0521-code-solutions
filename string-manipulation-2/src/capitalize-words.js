/* exported capitalizeWords */

function capitalizeWords(string) {
  var capitalizedWords = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] !== ' ') {
      capitalizedWords += string[i].toLowerCase();
    } else {
      capitalizedWords += string[i];
      i++;
      capitalizedWords += string[i].toUpperCase();
    }
  }
  return capitalizedWords;
}

// -- input: a string of words
// -- output: a new string with the first letter of every word capitalized
//     -- all other letters should be lower case

// game plan:
// -- create a new variable to hold final capitalized words

// -- capitalize the very first character at index 0 and add it into
//    the final capitalized words variable
// -- create a loop to loop through each character of the string after 0
//     -- if the character is a not a space
//         -- make the letter lower case and add it into the final variable
//     -- if the character is a space
//         -- add it into the final variable
//         -- make the letter one index after it capitalized
//             -- and add it into the final variable
// -- return the final variable

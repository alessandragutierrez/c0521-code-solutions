/* exported truncate */

function truncate(length, string) {
  if (length > string.length) {
    string += '...';
    return string;
  }
  var truncated = '';
  for (var i = 0; i < length; i++) {
    truncated += string[i];
  }
  truncated += '...';
  return truncated;
}

// -- input: (length) representing a javascirpt number; (string)
// -- output: a new string which will cut the string argument to the length of the
// length argument, with an ellipses (...) appended

// -- if the value of length is greater than string.length
//     -- append an ellipses to the string value
//     -- return the string value

// -- create a space to hold new truncated string

// -- create a loop which starts at 0 and stops at the value of length
//     -- add the index of each string character to new truncated string

// -- add '...' to the end of truncated string
// -- return truncated string

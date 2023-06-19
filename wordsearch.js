/* Pair programming by @gckey and @x33ra */
const wordSearch = (letters, word) => {
  let result = false;
  // check if the input is valid
  if (letters.length < 1 || word.length < 1) {
    return false;
  }
  // join each row of the 2D array horizontallty to form an array of strings
  const horizontalJoin = letters.map(ls => ls.join(''));
  let vertical = [];
  for (let row = 0; row < letters.length; row++) {
    for (let column; column < letters.length; column++) {
      if (row === 0) {
        vertical.push(letters[row][column]);
      } else {
        vertical[column].push(letters[row][column]);
      }
    }
  
  }
  //Join each col of the 2D array vertically to form an array of strings
  const verticalJoin = vertical.map(ls => ls.join(''));
  // check for word in vertical strings
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      result = true;
      break;
    }
  }
  // check for word in horizontal strings
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
      break;
    }
  }
  return result;

};


module.exports = wordSearch;
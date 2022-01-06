function processInput(str) {
  // return -1 if string cannot be split in half
  if (!str || str.length % 2) return -1;
  else {
    // break string into 2 substring arrays
    let str1 = str.substring(0, str.length/2).split('');
    let str2 = str.substring(str.length/2).split('');
    
    // loop over left half and compare letters
    // goal is to reduce str2 to array of ONLY letters which would need changed
    for (let i = 0; i < str1.length; i++) {
      let sharedLetter = str2.indexOf(str1[i]);
      // if letter is shared, remove from str2
      if (sharedLetter >= 0) str2.splice(sharedLetter, 1);
    }

    // whatever remains of str2 would need changed
    return str2.length;
  }
}

module.exports = {
  processInput
}
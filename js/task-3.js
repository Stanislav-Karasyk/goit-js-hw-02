const findLongestWord = function (string) {
  const stringAsArr = string.split(' ');

  let longestWord = 0;
  let result;

  for (let i = 0; i < stringAsArr.length; i++) {
    if (stringAsArr[i].length > longestWord) {
      longestWord = stringAsArr[i].length;
      result = stringAsArr[i];
    }
  }

  return result;
};

// для проверки:
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

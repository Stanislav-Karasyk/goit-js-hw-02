const formatString = function (string) {
  const controlLength = 40;
  let result;
  if (string.length < controlLength) {
    result = string;
  } else if (string.length > controlLength) {
    result = string.substr(0, 40) + '...';
  }

  return result;
};

//для проверки:
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

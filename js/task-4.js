const formatString = function (string) {
  return string.length < 40 ? string : string.slice(0, 40) + '...';
};

//для проверки:
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

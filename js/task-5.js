const checkForSpam = function (message) {
  return message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale')
    ? true
    : false;
};

//для проверки:
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

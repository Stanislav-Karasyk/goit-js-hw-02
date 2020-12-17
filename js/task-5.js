const checkForSpam = function (message) {
  message = message.toLowerCase();
  if (message.includes('spam') || message.includes('sale')) {
    return true;
  } else {
    return false;
  }
};

//для проверки:
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
};

// для проверки:
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

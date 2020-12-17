const calculateEngravingPrice = function (message, pricePerWord) {
  const messageArr = message.split(' ');

  const sumWord = messageArr.length;

  const pricePerAll = sumWord * pricePerWord;

  return pricePerAll;
};

// для проверки:
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

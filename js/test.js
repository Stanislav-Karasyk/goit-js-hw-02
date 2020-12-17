// рекурсивная функция!

// const febo = function (amount, resArr = [0, 1]) {

//     resArr.push(resArr[resArr.length - 2] + resArr[resArr.length - 1]);

//     if (resArr.length < amount) {
//         return febo(amount, resArr);
//     } else{
//         return resArr;
//     }
// }

// console.log(febo(10));

// --------------Задача про обмен валют-------------

// const usdBuy = 28.5;
// const usdSell = 27.5;

// const evroBuy = 32.5;
// const evroSell = 31.5;

// const rubBuy = 0.5;
// const rubSell = 0.3;

// const exeBuy = (amount, currency) => amount / currency;

// const exeSell = (amount, currency) => amount * currency;

// console.log('Произведен обмен ' + exeBuy(100, usdBuy));

// console.log('Произведен обмен ' + exeSell(100, usdSell));

// console.log('Произведен обмен ' + exeBuy(100, rubBuy));

// --------------END Задача про обмен валют-------------

// -------написать функцию каторая заполнит масив рандомными значениями и потом находим срежнее арифметическое!

const randomArr = (amount, min, max) => {
  let num = [];
  for (let i = 0; i < amount; i++) {
    num.push(parseInt(Math.random() * (max - min) + min));
  }

  let sumItem = 0;
  for (let item of num) {
    sumItem += item;
  }

  return sumItem / num.length;
};

console.log(randomArr(10, 1, 100));

// ------------

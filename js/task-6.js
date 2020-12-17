const numbers = [];
let input;
let total = 0;

do {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  numbers.push(input);
} while (input !== null);

let sumItem = 0;
for (let item of numbers) {
  sumItem += item;
  total = sumItem;
}

alert(`Общая сумма чисел равна ${total}`);

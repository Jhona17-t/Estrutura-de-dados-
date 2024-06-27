const number = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];

for (let i = 0; i < number.length; i++) {
  if (i != number.indexOf(number[i])) {
    number.splice(i, i--);
  }
}
number.sort();
console.log(number);

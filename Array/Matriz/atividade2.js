const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
numbers.push([1, 2, 3]);
console.log(numbers);
numbers.unshift([4, 5, 6]);
console.log(numbers);

console.log(numbers.pop());

console.log(numbers.shift());
console.log(numbers);
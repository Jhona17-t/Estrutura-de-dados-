const arr = [
  [10, 20, 60],
  [8, 10, 52],
];
let soma = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    soma = soma * arr[i][j];
  }
}
console.log(soma);

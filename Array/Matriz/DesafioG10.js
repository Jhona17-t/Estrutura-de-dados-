const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
let soma1 = 0;
let soma2 = 0;
let dif;
for (let li = 0; li < arr.length; li++) {
  let co1 = li;
  let co2 = arr.length - 1 - li;
  soma1 = soma1 + arr[li][co1];
  soma2 = soma2 + arr[li][co2];
  console.log(arr[li][co1]);
  console.log(arr[li][co2]);
}
dif = soma1 - soma2;
console.log(dif);

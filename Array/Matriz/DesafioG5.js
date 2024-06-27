const arr = [
  [10, 20, 30],
  [10, 20, 30],
];

for (let i = 0; i < arr[0].length; i++) {
  let res = 1;
  for (let j = 0; j < arr.length; j++) {
    console.log((res = res * arr[j][i]));
  }
}

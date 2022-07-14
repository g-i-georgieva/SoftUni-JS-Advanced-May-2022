function magical(arr) {
  let isMagic = true;

  for (let i = 0; i < arr.length - 1; i++) {
    let sumRowOne = arr[i].reduce((a, b) => a + b, 0);
    let sumRowTwo = arr[i].reduce((a, b) => a + b, 0);
    let sumColOne = 0;
    let sumColTwo = 0;

    for (let j = 0; j < arr.length; j++) {
      sumColOne += arr[i][j];
      sumColTwo += arr[i + 1][j];
    }

    if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
      isMagic = false;
    }
  }
  return isMagic;
}
console.log(
  magical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
console.log(
  magical([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log(
  magical([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);

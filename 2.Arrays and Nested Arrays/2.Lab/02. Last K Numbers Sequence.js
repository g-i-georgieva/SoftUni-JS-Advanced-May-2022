function solve(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let currEl = arr.slice(-k);
    let sum = 0;
    for (let el of currEl) {
      sum += el;
    }
    arr.push(sum);
  }
  return arr;
}
console.log(solve(6, 3));

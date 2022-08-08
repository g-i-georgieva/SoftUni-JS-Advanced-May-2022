function solve(array, start, end) {
  if (Array.isArray(array) == false) {
    //early exit
    return NaN;
  }
  let sum = 0;
  if (start < 0) {
    start = 0;
  }

  if (end > array.length - 1) {
    end = array.length - 1;
  }

  for (let i = start; i <= end; i++) {
    sum += Number(array[i]);
  }

  return sum;
}

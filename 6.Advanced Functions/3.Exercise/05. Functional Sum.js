function add(n) {
  let sum = n;

  function calc(y) {
    sum += y;
    return calc;
  }

  calc.toString = function () {
    return sum;
  };
  return calc;
}

function solution(number) {
  function add5(a, b) {
    return a + b;
  }

  return add5.bind(this, number);
}

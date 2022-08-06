function getFibonator() {
  const seq = [0, 1];
  return function calc() {
    seq.push(seq.slice(-2).reduce((a, b) => a + b));
    return seq[seq.length - 2];
  };
}

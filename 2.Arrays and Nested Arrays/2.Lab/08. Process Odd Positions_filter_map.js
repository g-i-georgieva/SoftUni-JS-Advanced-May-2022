function solve(numbers) {
  const oddNums = numbers.filter((v, i) => i % 2 == 1);
  const doubled = oddNums.map((x) => x * 2);
  doubled.reverse();

  return doubled.join(" ");
}
solve([3, 0, 10, 4, 7, 3]);

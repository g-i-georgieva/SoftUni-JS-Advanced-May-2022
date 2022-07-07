function solve(input) {
  // let first = Number(input[0])
  // let second = Number(input[input.length-1])
  //   let first = newArr.shift(); // This method modify the array, so if we have only 1 number in the array, the pop() method wont't take the last elelment
  //   let second = input.pop();
  let first = [...input].shift();
  let second = [...input].pop();
  let sum = first + second;
  return sum;
}
solve(["20", "30", "40"]);

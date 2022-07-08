function solve(input) {
  let sorted = input.sort((a, b) => a - b);

  //For loop
  // let result = []
  // for (let i = Math.floor(sorted.length/2); i <sorted.length; i++) {
  //     result.push(sorted[i])
  // }
  // return result

  //If condition
  if (sorted.length % 2 == 0) {
    return sorted.slice(sorted.length / 2);
  } else {
    return sorted.slice(Math.floor(sorted.length / 2));
  }
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));

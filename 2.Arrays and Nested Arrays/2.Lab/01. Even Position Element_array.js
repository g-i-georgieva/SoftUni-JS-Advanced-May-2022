function solve(input) {
  let newArr = [];
  // for (let i = 0; i < input.length; i++) {
  //     let currEll = input[i]
  //     if (i % 2==0){
  //         newArr.push(currEll)
  //     }
  // }
  for (let i = 0; i < input.length; i += 2) {
    newArr[newArr.length] = input[i];
  }
  console.log(newArr.join(" "));
}
solve(["20", "30", "40", "50", "60"]);

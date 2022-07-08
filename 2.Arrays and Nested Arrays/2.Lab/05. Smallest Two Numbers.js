function solve(input) {
    let sorted = input.sort((a, b) => a - b)
    console.log(sorted.slice(0,2));
}
solve([30, 15, 50, 5])
function solve(input) {
    let elements = input.map(Number);
    let sum = 0
    console.log(elements.reduce((a, b) => a + b))
    console.log(elements.reduce((a, b) => a + (1/b)))
    // for (let i = 0; i < elements.length; i++) {
    //     sum += (1 / elements[i])
    // }
    // console.log(sum);
    console.log(elements.reduce((a, b) => a + b.toString()))
}
solve([2, 4, 8, 16])
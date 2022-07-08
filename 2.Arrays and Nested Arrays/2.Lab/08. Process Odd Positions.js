function solve(input) {
    let result = []
    for (let i = 0; i < input.length; i++) {
        let currElement = input[i]
        if (i % 2 !== 0) {
            result.push(currElement * 2)
        }
    }
    return result.reverse()
}
console.log(solve([3, 0, 10, 4, 7, 3]))
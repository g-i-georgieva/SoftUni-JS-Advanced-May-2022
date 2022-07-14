function magicMatrices(input) {
    let sum = input[0].reduce((prev, curr) => prev + curr);

    for (let i = 0; i < input[0].length; i++) {
        let sumCol = 0;
        for (let j = 0; j < input.length; j++) {
            sumCol += input[j][i];
        }
        if (sumCol !== sum) {
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
))
console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
))
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
))
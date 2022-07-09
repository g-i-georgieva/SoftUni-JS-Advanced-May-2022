function sumUpDiagonals(matrix) {
    let sumDiagonals = { main: 0, second: 0 },
        matrixLength = matrix.length;

    for (let i = 0; i < matrixLength; i++) {
        sumDiagonals.main += matrix[i][i];
        sumDiagonals.second += matrix[i][matrixLength - i - 1];
    }
    return `${sumDiagonals.main} ${sumDiagonals.second}`
}

console.log(sumUpDiagonals([[20, 40], [10, 60]]))
function diagonalSum(matrix) {
    let matrixLength = matrix.length;
    let mainSum = 0
    let secondSum = 0
    console.log(matrix);

    for (let i = 0; i < matrixLength; i++) {
        mainSum += matrix[i][i];
        secondSum += matrix[i][matrixLength - i - 1];
    }
    console.log(`${mainSum} ${secondSum}`)
}
diagonalSum([[20, 40], [10, 60]])
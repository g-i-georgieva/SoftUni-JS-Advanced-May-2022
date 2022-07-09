function solve(matrix) {
    let pairs = 0;
    let matrixEnd = matrix.length
    let lineLength = matrix[0].length
    for (let row = 0; row < matrixEnd; row++) {
        let currentLine = matrix[row]

        for (let col = 0; col < lineLength; col++) {
            let firstLineElement = currentLine[col];
            let nextLineElement = ''
            if (row < matrixEnd - 1) {
                nextLineElement = matrix[row + 1][col]
            }
            let nextElement = currentLine[col + 1]

            if (firstLineElement === nextElement) {
                pairs++
            }
            if (firstLineElement === nextLineElement) {
                pairs++
            }
        }
    }
    return pairs
}
console.log(solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));
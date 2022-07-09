function biggestElement(matrix) {
    for (let arr of matrix) {
        arr.sort((a, b) => b - a);
    }
    
    matrix.sort((a, b) => b[0] - a[0]);
    return matrix[0][0];
}
console.log(biggestElement([[20, 50, 10], [8, 33, 145]]))
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))
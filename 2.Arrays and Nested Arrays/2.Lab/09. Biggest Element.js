function biggestElement(input) {
    let result = []
    for (let arr of input) {
        let maxNum = Math.max(...arr)
        result.push(maxNum)
    }
    console.log(Math.max(...result));
}

biggestElement([[20, 50, 10], [8, 33, 145]])
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])
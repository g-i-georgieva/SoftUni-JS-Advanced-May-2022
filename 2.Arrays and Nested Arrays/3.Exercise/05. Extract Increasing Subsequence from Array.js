function extract(array) {
    let newArr = [array[0]]

    for (let i = 1; i < array.length; i++) {
        let lastEl = newArr[newArr.length - 1]
        if (array[i] >= lastEl) {
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]))
console.log(extract([1, 2, 3, 4]))
console.log(extract([20, 3, 2, 15, 6, 1]))
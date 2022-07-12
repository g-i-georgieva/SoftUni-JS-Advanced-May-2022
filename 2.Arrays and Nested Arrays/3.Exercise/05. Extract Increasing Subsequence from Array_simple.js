function extract(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let outputArr = [];

    for (let el of input) {
        if (el >= maxNum) {
            outputArr.push(el);
            maxNum = el;
        }
    }
    return outputArr
}
console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]))
console.log(extract([1, 2, 3, 4]))
console.log(extract([20, 3, 2, 15, 6, 1]))
function solve(input) {
    let numAsString = input.toString().split('').map(Number)
    let isSame = true
    let digtToCompare = numAsString[0]
    let sumOfDigits = 0
    let numLength = numAsString.length

    for (let i = 0; i < numLength; i++) {

        sumOfDigits += numAsString[i]
        if (numAsString[i] !== digtToCompare) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sumOfDigits);
}
solve(2222222)
solve(1234)
function solve(num1, num2) {
    let arr = []
    let maxNum = Math.max(num1, num2)

    for (let i = 1; i <= maxNum; i++) {

        if (num1 % i == 0 && num2 % i == 0) {
            arr.push(i)
        }

    }

    console.log(Math.max(...arr));
}
solve(15, 5)
solve(2154, 458)
function solve(num) {
    let result = ''
    if (num) {
        for (let i = 0; i < num; i++) {
            console.log(result = '* '.repeat(num))
        }
    }else{
        for (let i = 0; i < num; i++) {
            console.log(result = '* '.repeat(5))
        }
    }
}
solve()
solve(5)
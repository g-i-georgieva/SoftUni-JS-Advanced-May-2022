function solve(par1, par2) {
    let sum = 0

    for (let i = +par1; i <= +par2; i++) {
        sum += i
        
    }
    return sum
}
console.log(solve('1', '5'));
console.log(solve('-8', '20'));
function solve(p1, p2, op) {
    let result;
    switch (op) {
        case '+': result = p1 + p2; break;
        case '-': result = p1 - p2; break;
        case '*': result = p1 * p2; break;
        case '/': result = p1 / p2; break;
        case '%': result = p1 % p2; break;
        case '**': result = p1 ** p2; break;
    }
    return result
}
console.log(solve(5, 6, '+'))
console.log(solve(3, 5.5, '*'))
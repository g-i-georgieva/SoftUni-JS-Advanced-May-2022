function solve(par1, par2, par3) {
// let sum = par1.length + par2.length + par3.length
// console.log(sum);
// console.log(`${Math.round(sum/3)}`);

return `${par1.length + par2.length + par3.length}\n${Math.round((par1.length + par2.length + par3.length)/3)}`
}
console.log(solve('chocolate', 'ice cream', 'cake'))
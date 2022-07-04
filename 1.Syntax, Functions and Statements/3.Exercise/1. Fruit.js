function solve(fruit, grams, price) {
   return `I need $${((grams/1000)*price).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`;
}
console.log(solve('orange', 2500, 1.80))
console.log(solve('apple', 1563, 2.35))
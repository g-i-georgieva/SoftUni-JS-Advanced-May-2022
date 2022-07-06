function solve(x1, y1, x2, y2) {
    let x0 = 0
    let y0 = 0
    let firstDistance = Math.sqrt(((x1 - x0)**2) + ((y1 - y0)**2))
    let secondDistance = Math.sqrt(((x2 - x0)**2) + ((y2 - y0)**2))
    let thirdDistance = Math.sqrt(((x1 - x2)**2) + ((y1 - y2)**2))
    console.log(Number.isInteger(firstDistance) ? `{${x1}, ${y1}} to {${y0}, ${y0}} is valid` : `{${x1}, ${y1}} to {${x0}, ${y0}} is invalid`)
    console.log(Number.isInteger(secondDistance) ? `{${x2}, ${y2}} to {${y0}, ${y0}} is valid` : `{${x2}, ${y2}} to {${x0}, ${y0}} is invalid`)
    console.log(Number.isInteger(thirdDistance) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)

}
solve(2, 1, 1, 1)
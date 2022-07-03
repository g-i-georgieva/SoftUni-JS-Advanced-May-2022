function solve(param) {
    //     if (typeof(param) == 'number') {
    //         let area = Math.PI * Math.pow(param, 2)
    //         console.log(area.toFixed(2));
    //     } else {
    //         console.log(`We can not calculate the circle area, because we receive a ${typeof(param)}.`);
    //     }

    let result = (typeof(param) == 'number') ? (Math.PI * Math.pow(param, 2)).toFixed(2) : `We can not calculate the circle area, because we receive a ${typeof (param)}.`
    console.log(result);

    // return typeof(param) == 'number' ? (Math.PI * Math.pow(param, 2)).toFixed(2) : `We can not calculate the circle area, because we receive a ${typeof (param)}.`
}
solve(5)
solve('name')

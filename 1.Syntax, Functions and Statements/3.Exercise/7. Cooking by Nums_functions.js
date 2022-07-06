function solve(num, p1, p2, p3, p4, p5) {
    let inputAsNumber = Number(num)
    let arr = [p1, p2, p3, p4, p5]

    let chop = function () {
        return inputAsNumber / 2
    }
    let dice = function () {
        return Math.sqrt(inputAsNumber)
    }
    let spice = function () {
        return inputAsNumber + 1
    }
    let bake = function () {
        return inputAsNumber * 3
    }
    let fillet = function () {
        return inputAsNumber * 0.80
    }

    for (let i = 0; i < arr.length; i++) {
        let currCommand = arr[i]
        switch (currCommand) {
            case 'chop':
                inputAsNumber = chop(inputAsNumber)
                break;
            case 'dice':
                inputAsNumber = dice(inputAsNumber)
                break;
            case 'spice':
                inputAsNumber = spice(inputAsNumber)
                break;
            case 'bake':
                inputAsNumber = bake(inputAsNumber)
                break;
            case 'fillet':
                inputAsNumber = fillet(inputAsNumber)
                break;
        }
        console.log(inputAsNumber);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
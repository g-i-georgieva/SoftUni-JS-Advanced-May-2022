function solve(speed, area) {
    let inLimit = true
    let speedLImit = 0
    let diff = 0
    let status = ''

    switch (area) {
        case 'motorway': speed <= 130 ? inLimit : inLimit = false; speedLImit = 130; break;
        case 'interstate': speed <= 90 ? inLimit : inLimit = false; speedLImit = 90; break;
        case 'city': speed <= 50 ? inLimit : inLimit = false; speedLImit = 50; break;
        case 'residential': speed <= 20 ? inLimit : inLimit = false; speedLImit = 20; break;
    }

    if (inLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLImit} zone`);
    } else {
        diff = speed - speedLImit
        if (diff <= 20) {
            status = 'speeding'
        } else if (diff <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLImit} - ${status}`);
    }
}
solve(40, 'city')
solve(21, 'residential');
solve(120, 'interstate')
solve(200, 'motorway')
function solve(steps, size, speedKh) {
    let distanceMet = steps * size; // distance in meters to workd
    let addTime = Math.floor(distanceMet / 500) * 60 //in seconds
    let speed = speedKh * 1000 / 3600 // speed in seconds
    let time = (distanceMet / speed) + addTime

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0')
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0')
    let second = (time % 60).toFixed(0).padStart(2, '0')
    console.log(`${hours}:${minutes}:${second}`);
}
solve(4000, 0.60, 5)
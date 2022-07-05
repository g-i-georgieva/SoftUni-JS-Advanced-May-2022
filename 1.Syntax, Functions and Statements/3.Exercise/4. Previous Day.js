function solve(y, m, d) {
    let dateInput = `${y}-${m}-${d}`

    let date = new Date(dateInput)
    date.setDate(date.getDate()-1)
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
solve(2016, 9, 30)
solve(2016, 10, 1)
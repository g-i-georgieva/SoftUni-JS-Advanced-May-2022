function previousDay(year, month, day) {
    if (day === 1) {
        day = day - 1;
        month = month - 1;
    } else {
        day = day - 1;
    }
    let date = new Date(year, month, day);
    let output = `${year}-${month}-${date.getDate()}`;
    console.log(output);
}
previousDay(2016, 9, 30)
previousDay(2016, 10, 1)
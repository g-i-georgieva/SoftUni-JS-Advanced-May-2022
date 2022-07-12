function listNames(array) {
    array.sort((a, b) => a.localeCompare(b))//if using only array.sort() there wont't be difference between lower and upper case

    for (let i = 0; i < array.length; i++) {
        console.log(`${i+1}.${array[i]}`);
    }
}
listNames(["John", "Bob", "Christina", "Ema"])
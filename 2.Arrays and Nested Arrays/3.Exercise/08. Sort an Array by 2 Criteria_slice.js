function sortByTwoCriteria(input) {
    let sortedArr = input.slice(0).sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    for (let el of sortedArr) {
        console.log(el);
    }
}
sortByTwoCriteria(['alpha', 'beta', 'gamma'])
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortByTwoCriteria(['test', 'Deny', 'omen', 'Default'])

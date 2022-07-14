function sortArray(array) {
    array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .sort((a, b) => a.length - b.length);
    
    console.log(array.join('\n'));
}
sortArray(['alpha', 'beta', 'gamma'])
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortArray(['test', 'Deny', 'omen', 'Default'])
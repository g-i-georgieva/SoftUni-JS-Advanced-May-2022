function printArray(array, string) {
    return array.join(string)
}
console.log(printArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
))
console.log(printArray(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
))

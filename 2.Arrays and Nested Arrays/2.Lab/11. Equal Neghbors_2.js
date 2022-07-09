function solve(input) {
    let pairs = 0;

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];

        for (let j = 0; j < currentLine.length; j++) {
            let firstLineElement = currentLine[j];
            let nextLineIndex = i + 1;
            let nextLine = input[nextLineIndex];
            let secondLineElement = ''
            if (i < input.length - 1) {
                secondLineElement = nextLine[j];
            }

            let nextElement = currentLine[j + 1]

            if (firstLineElement === secondLineElement) {
                pairs++;
            }

            if (firstLineElement === nextElement) {
                pairs++
            }
        }
    }
    return pairs
}
console.log(solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));
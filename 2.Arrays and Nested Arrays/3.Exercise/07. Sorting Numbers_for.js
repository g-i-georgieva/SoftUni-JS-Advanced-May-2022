function sortNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    const end = numbers.length;

    for (let i = 1; i < end; i += 2) {
        const last = numbers.pop();
        numbers.splice(i, 0, last);
    }

    return numbers;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]))
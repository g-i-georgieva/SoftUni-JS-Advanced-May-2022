function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, "", (a, b) => a + b);

    function aggregate(arr, initialValue, func) {
        let value = initialValue;
        for (let i = 0; i < arr.length; i++) {
            value = func(value, arr[i]);
        }
        console.log(value);
    }
}

aggregateElements([2, 4, 8, 16]);
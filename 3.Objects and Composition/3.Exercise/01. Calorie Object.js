function calorieObject(input) {
    let result = {}

    for (let i = 0; i < input.length; i += 2) {
        let fruit = input[i]
        let calories = input[i+1]
        result[fruit] = Number(calories)
    }

   console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
function extract(array) {
  let newArr = [];
  let biggest = array[0];

  for (let i = 0; i < array.length; i++) {
    let lastEl = array[i];
    if (lastEl >= biggest) {
      newArr.push(lastEl);
      biggest = lastEl;
    }
  }
  return newArr;
}
console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extract([1, 2, 3, 4]));
console.log(extract([20, 3, 2, 15, 6, 1]));

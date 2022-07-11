function printNthElement(array, num) {
  return array.filter((element, index) => index % num === 0);
}
console.log(printNthElement(["5", "20", "31", "4", "20"], 2));
console.log(printNthElement(["dsa", "asd", "test", "tset"], 2));
console.log(printNthElement(["1", "2", "3", "4", "5"], 6));

function rotateArray(array, rotations) {
  for (let i = 0; i < rotations % array.length; i++) {

    //remove the last element from the array
    //add the last element to the start of the array
    array.unshift(array.pop());
  }
  console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);

function createSortedList() {
  let list = [];
  return {
    size: 0,
    add(element) {
      list.push(element);
      list.sort((a, b) => a - b);
      this.size++;
    },
    remove(index) {
      if (list[index] !== undefined) {
        list.splice(index, 1);
        list.sort((a, b) => a - b);
        this.size--;
      }
    },
    get(index) {
      if (list[index] !== undefined) {
        return list[index];
      }
    },
  };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
console.log(list.get(1)); 
list.remove(1); //6
console.log(list.get(3));

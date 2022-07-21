function createSortedList() {
  return {
    collection: [],
    size: 0,
    add(element) {
      this.collection.push(element);
      this.collection.sort((a, b) => a - b);
      this.size++;
    },
    remove(index) {
      const length = this.collection.length;
      if (index >= 0 && index < length) {
        this.collection.splice(index, 1);
        this.collection.sort((a, b) => a - b);
        this.size--;
      }
    },
    get(index) {
      const length = this.collection.length;
      if (index >= 0 && index < length) {
        return this.collection[index];
      }
    },
  };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); //5,6,7
console.log(list.get(1)); //6
list.remove(1); //6
console.log(list.get(1)); //7

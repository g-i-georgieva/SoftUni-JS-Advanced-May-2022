function createSortedList(){
    let list = [];
   
    return {
        add(element){
            list.push(element);
            list.sort((a,b) => a - b);
            this.size++;
        },
        remove(index){
            if (index < 0 || index >= list.length) {
                throw new Error('Index is out of range!');
            }
            list.splice(index,1);
            this.size--;
        },
        get(index){
            if (index < 0 || index >= list.length) {
                throw new Error('Index is out of range!');
            }
            return list[index];
        },
        size: 0,
    }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); //5,6,7
console.log(list.get(1)); //6
list.remove(1); //6
console.log(list.get(1)); //7

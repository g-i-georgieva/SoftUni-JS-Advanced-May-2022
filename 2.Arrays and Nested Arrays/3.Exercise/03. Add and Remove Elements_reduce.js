function addRemoveEl(arr) {

    let result = arr.reduce((acc, el, index) => {
        if (el === "add") {
            acc.push(index + 1);
        } else if (el === "remove") {
            acc.pop();
        }
        return acc;
    }, []);
    if (result.length === 0) {
        console.log("Empty");
    } else {
        result.forEach((el) => console.log(`${el}`));
    }
}

addRemoveEl(['add',
    'add',
    'add',
    'add']
)
addRemoveEl(['add',
    'add',
    'remove',
    'add',
    'add']
)
addRemoveEl(['remove',
    'remove',
    'remove']
)

function addRemoveEl(arr) {
    let newaArr = []
    let finalArr = []

    for (let i = 0; i < arr.length; i++) {
        newaArr.push(i + 1)
        if (arr[i] === 'add') {
            finalArr.push(newaArr[i])
        } else if (arr[i] === 'remove') {
            finalArr.pop(newaArr[i])
        }
    }
    if (finalArr.length > 0) {
        console.log(finalArr.join('\n'));
    } else {
        console.log('Empty');
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

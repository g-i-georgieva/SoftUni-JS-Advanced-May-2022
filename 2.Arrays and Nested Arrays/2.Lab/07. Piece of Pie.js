function solve(arr, target1, target2) {
    let index1 = arr.indexOf(target1)
    let index2 = arr.indexOf(target2)

    let result = arr.slice(index1,index2+1)
    return result
}
console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))
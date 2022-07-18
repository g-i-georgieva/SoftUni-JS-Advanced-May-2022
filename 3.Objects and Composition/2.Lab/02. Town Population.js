function solve(array) {
  let object = {};
  for (let el of array) {
    let [name, populataion] = el.split(" <-> ");
    populataion = Number(populataion);
    if (object[name] !== undefined) {
      populataion += object[name];
    }
    object[name] = populataion;
  }
  for (let name in object) {
    console.log(`${name} : ${object[name]}`);
  }
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

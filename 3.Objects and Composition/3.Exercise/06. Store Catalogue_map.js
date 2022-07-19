function storeCatalogue(arr) {
  arr = arr.sort((a, b) => {
    return a.localeCompare(b);
  });

  arr = arr.map((el) => {
    return el.split(" : ");
  });

  let initial = arr[0][0][0];
  console.log(initial);
  arr.forEach((element) => {
    let curentInital = element[0][0];
    if (curentInital !== initial) {
      console.log(curentInital);
      initial = curentInital;
    }
    console.log(`  ${element[0]}: ${element[1]}`);
  });
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

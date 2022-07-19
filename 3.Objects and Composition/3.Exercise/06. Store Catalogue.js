function storeCatalogue(input) {
  input.sort((a, b) => a.localeCompare(b)); // because sort is mutating method, when sorted the input changes as well
  let current = [];
  let char = "";
  for (let i = 0; i < input.length; i++) {
    let current = input[i].split(" : ");
    if (input[i][0] !== char) {
      console.log(input[i][0]);
    }
    console.log(`  ${current[0]}: ${current[1]}`);
    char = input[i][0];
  }
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

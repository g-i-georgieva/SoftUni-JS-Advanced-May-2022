function listNames(array) {
  array.sort((a, b) => a.localeCompare(b));
  array.forEach((element, index) => {
    console.log(`${index + 1}.${element}`);
  });

  //array.sort((a, b) => a.localeCompare(b)).forEach((e, i) => console.log((i + 1) + '.' + e));
}
listNames(["John", "Bob", "Christina", "Ema"]);

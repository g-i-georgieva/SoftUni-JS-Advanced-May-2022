function solve(...args) {
  let r = "";
  const info = args.reduce((a, b) => {
    if (a.hasOwnProperty(typeof b) == false) {
      a[typeof b] = [];
    }
    a[typeof b].push(b);
    r += `${typeof b}: ${b}\n`;

    return a;
  }, {});

  r += Object.entries(info)
    .sort((a, b) => b[1].length - a[1].length)
    .map((e) => `${e[0]} = ${e[1].length}`)
    .join("\n");
  console.log(r);
}

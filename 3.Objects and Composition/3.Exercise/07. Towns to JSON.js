function townsToJson(input) {
  let [town, latitude, longitude] = input[0].split(" | ");
  town = town.slice(2);
  let result = [];

  for (let index = 1; index < input.length; index++) {
    let info = input[index];
    let [name, lat, long] = info.split(" |");
    name = name.slice(2);
    lat = Number(lat)
    long = Number(long)
    let obj = {
      Town: name,
      Latitude: Number(lat.toFixed(2)),
      Longitude: Number(long.toFixed(2))
    };
    result.push(obj);
  }

  console.log(JSON.stringify(result));
}
townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

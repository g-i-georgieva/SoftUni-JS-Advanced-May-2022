function lowestPrice(input) {
  let products = [];

  for (const el of input) {
    let [town, product, price] = el.split(" | ");

    if (products.filter((x) => x.product === product).length > 0) {
      let object = products.find((x) => x.product === product);
      if (object.price > Number(price)) {
        object.price = Number(price);
        object.town = town;
      }
    } else {
      let object = { product, town, price: Number(price) };
      products.push(object);
    }
  }

  for (const product of products) {
      console.log(`${product.product} -> ${product.price} (${product.town})`);
      
  }
}
lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
  'Sofia | Sample Product | 900'
]);

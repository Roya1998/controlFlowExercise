// Part 3:Iterating over and object
const product = {
  name: "bag",
  price: 125,
  inStock: true,
};
for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

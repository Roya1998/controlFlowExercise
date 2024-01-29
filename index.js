// Part-1:Complex switch statement

let color = "red";

switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("caution");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("not found");
}

// Part-2:Nested for Loop

const matrix = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// Part 3:Iterating over and object

const product = {
  name: "bag",
  price: 125,
  inStock: true,
};

for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

// Part 4: If else with logical operators

if (product.price < 50 && product.inStock === true) {
  console.log("Available");
} else {
  console.log("Unavailable");
}

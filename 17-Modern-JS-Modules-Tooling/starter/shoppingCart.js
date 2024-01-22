console.log('Exporting module');

//Blocking code
console.log('Start fetching users');

export const cart = [];

const totalPrice = 10;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  const name = product;
  const quantit = quantity;
  console.log(` ${quantity} ${product} in the cart `);
};

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

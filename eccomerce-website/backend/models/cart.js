
const mongoose = require('mongoose');
// this is the cart schema which will be used to create a cart collection in the database 
// it will display the product when any add to cart button is clicked on that product and show it in the cart page
// the cart page will display the product name, discounted price and image of the product and total price of all the products in the cart
// the cart page will also have a proceed to checkout button which will take the user to the checkout page


const cartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    discountedPrice: { type: Number, required: true },
    image: { type: String, required: true }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
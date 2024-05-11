const moongose = require ('mongoose');

const productSchema = new moongose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    images: [{ type: String, required: true }],
    wishlistIconPath: { type: String, required: true },
    addToCartIconPath: { type: String, required: true },
    currentImageIndex: { type: Number, required: true },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
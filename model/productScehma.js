const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product_image: { type: String, required: true },
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);
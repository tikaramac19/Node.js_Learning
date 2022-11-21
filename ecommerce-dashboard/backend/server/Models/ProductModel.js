const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
        name: String,
        price: String,
        category: String,
        userId : String,
        company : String
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
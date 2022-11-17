const path = require("path");
const products = require("../models/products.model.js");


exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/products.html"));
}


exports.saveProduct = (req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    products.push(product);
    res.status(200).json({
        success: true,
        message: "Successfully create product",
        products
    })
}
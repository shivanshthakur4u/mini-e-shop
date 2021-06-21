const Products = require("../model/product");


const getAllProducts = async(res, req) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({ messsage: "Server Error" });
    }
}
const getProductsById = async(res, req) => {
    try {
        const products = await Products.findById(req.params.id);
        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({ messsage: "Server Error" });
    }
}

module.exports = {
    getAllProducts,
    getProductsById

}
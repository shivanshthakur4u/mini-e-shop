require("dotenv").config({ path: "./config.env" });

const productsData = require("./data/Product");
const connectDB = require("./config/db");
const Product = require("./model/product");

connectDB();
const importData = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data Import Successful");
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

importData();
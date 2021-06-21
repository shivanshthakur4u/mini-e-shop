import React from "react";
import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return ( < div className = "homescreen" >
        <
        h2 className = "homescreen_tile" > Latest Products < /h2> <
        div className = "homescreen_products" > {
            loading ? ( < h2 > < Loading / > < /h2>) : error? (<h2>{error}</h
                2 > ) : (products.map((product) => { <
                Product
                key = { product._id }
                productId = { product._id }
                name = { product.name }
                price = { product.price }
                description = { product.description }
                imageUrl = { product.imageUrl }
                />
            }))
        }

        <
        /div>

        <
        /div >
    );
};

export default HomeScreen;
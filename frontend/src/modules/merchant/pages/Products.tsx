import { useEffect, useState } from "react";
import ProductsTable from "../components/Products/Table";
import { get } from "http";
import { fetchStoreProducts } from "../actions/productActions";
import { MERCHANT_STORE_NAME } from "../../../redux/constants";
import { store } from "../../../redux";


const Products = () => {

    useEffect(() => {  
        fetchStoreProducts(1)
    }, []);


    return (
        <div className="flex">
            <ProductsTable />
        </div>
    );
};

export default Products;
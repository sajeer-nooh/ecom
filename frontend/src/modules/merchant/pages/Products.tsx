import { useEffect } from "react";
import ProductsTable from "../views/Products/Table";
import { fetchStoreProducts } from "../actions/productActions";


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
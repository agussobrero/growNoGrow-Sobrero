import React from "react";
import ListProducts from "../Components/ListProducts/ListProducts";
import "../App";

const Products = () => {
    return(
        <>
            <main className="main-container">
            <div className="div-listProd">
            <ListProducts />
            </div>
            </main> 
        </>
    )
}

export default Products;
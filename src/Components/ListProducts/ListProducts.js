import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./ListProducts.css";
import Data from "../Data/Data";

const ListProducts = ()=> {

    const [products, setProducts] = useState([]);

    const url = Data();

    const getProducts = () =>{
        return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (url.productsList)
        }, 2000)
        })
    }

    /* Probè hacerlo con async como segunda posibilidad */
    /* const getProductsAsync = async ()=> {
        try {
            const response = await getProducts().then((data)=> console.log(data));
        }
        catch (err) {
            console.log(err)
        }
    } */

    useEffect ( () => {
        getProducts().then ((result) => {
        setProducts(result)
    })
    },[])
    console.log(products)

    return(
        <div className="div-mainCard"> 
            {
                products.map((product) =>{
                const {id} = product
                    return(
                        <Card data={product} key={id}/>
                    )
                })
            }
        </div>
    )
}

export default ListProducts
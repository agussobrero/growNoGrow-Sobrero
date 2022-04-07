import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./ListProducts.css";
import data from "../Data/data";
import { useParams } from "react-router-dom";

const ListProducts = ()=> {

    const [products, setProducts] = useState([]);

    const {category} = useParams()
    

    const url = data;

    const getProducts = () =>{
        return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (url.productsList)
        }, 2000)
        })
    }

    /* Probè hacerlo con async como segunda posibilidad
    const getProductsAsync = async ()=> {
        try {
            const response = await getProducts().then((data)=> console.log(data));
        }
        catch (err) {
        }
    } */
    
    useEffect ( () => {
        setProducts([])
        getProducts().then ((result) => {
            setProducts(result)
            selectCategory(result, category)
    })
    },[category])

    const selectCategory = (array, category) =>{
        return(
            array.map( (product)=>{
                console.log(product)
                if(product.category==category) {
                    return(
                        setProducts([...products, product])
                    )
                }
            })
        )
    }

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
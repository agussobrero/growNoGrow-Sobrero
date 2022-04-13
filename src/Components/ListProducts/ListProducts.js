import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./ListProducts.css";
import data from "../Data/data";
import { useParams } from "react-router-dom";

const ListProducts = ()=> {

    const [products, setProducts] = useState([]);

    const {category} = useParams()

    const [loading, setLoading] = useState(true)

    const dataProducts = data.productsList;

    const getProducts = () =>{
        return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const myData = category ? dataProducts.filter( (product)=> product.category === category) : dataProducts
            resolve (myData)
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
        setLoading(true)
        setProducts([])
        getProducts().then ((result) => {
            setProducts(result)
            /* selectCategory(result, category) */
    })
    .finally(()=> setLoading(false))
    },[category])

    /* const selectCategory = (array, category) =>{
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
    } */

    return(
        loading ? (<h2>Loading...</h2>) : ( 
            <div className="div-mainCard"> 
                {
                products.map((product) =>{
                    return(
                        <Card data={product} key={product.id}/>
                    )
                })
                }
            </div>
        )
    )
}

export default ListProducts
import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./ListProducts.css";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ListProducts = ()=> {

    const [products, setProducts] = useState([]);

    const {category} = useParams()

    const [loading, setLoading] = useState(true)

    const getProducts = async () =>{
        const productCollection = collection(db, "productsList")
        const productsSnapshot = await getDocs(productCollection)
        const dataProducts = productsSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return dataProducts
    }  
    
    useEffect ( () => {
        setLoading(true)
        setProducts([])
        getProducts().then ((result) => {
        category ? selectCategory(result, category) : setProducts(result)
    })
    .finally(()=> setLoading(false))
    },[category])

    const selectCategory = (array, category) =>{
        return(
            // eslint-disable-next-line
            array.map( (product)=>{
                if(product.category===category) {
                    return(
                        setProducts(products => [...products, product])
                    )
                }
            })
        )
    }

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
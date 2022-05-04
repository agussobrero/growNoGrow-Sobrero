import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./ListProducts.css";
/* import data from "../Data/data"; */
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ListProducts = ()=> {

    const [products, setProducts] = useState([]);

    const {category} = useParams()

    const [loading, setLoading] = useState(true)

/*     const dataProducts = data.productsList; */

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
            setProducts(result)
    })
    .finally(()=> setLoading(false))
    },[category])

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
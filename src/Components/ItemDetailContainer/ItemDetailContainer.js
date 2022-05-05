import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=> {

    const [products, setProducts] = useState({});
    const {id} = useParams({})

    const getProduct = async () =>{
        const docRef = doc(db, "productsList", id)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()) {
            console.log("document data: ", docSnap.data())
            let product = docSnap.data()
            product.id = docSnap.id
            console.log(product)
            return product
        }
        else {
            console.log("no such document")
        }
    }  

    useEffect ( () => {
        getProduct().then ((result) => {
            setProducts(result)
        })
    },[])
    return (
        <ItemDetail data={products}/>
        )
}

export default ItemDetailContainer;
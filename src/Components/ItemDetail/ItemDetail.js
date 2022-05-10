import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import "../ItemDetail/ItemDetail.css"
import { CartContext } from "../Context/CartContext";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";


const ItemDetail = ()=> {
    
    const {id} = useParams({})
    const [product, setProduct] = useState({})

    const [onCarrito, setOnCarrito] = useState(0)

    const {addProductToCart} = useContext(CartContext)

    const getProduct = async () =>{
        const docRef = doc(db, "productsList", id)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
        }
        else {
            console.log("no such document") //VER EL TEMA DEL 404
        }
    } 

    useEffect( ()=>{
        getProduct()
    },[id])
    

    const onAdd = (count) =>{
        setOnCarrito(count)
        addProductToCart({...product, quantity: count})
        
    }

    return (
        <Container className="card-detail-cont">
            <div key={product.id} className="card-detail">
                <img src={product.url} alt="imgProd" className="img-detail"></img>
                <h2>{product.prod}</h2>
                <p>Categoria: {product.category}</p>
                <p>Tamaño: {product.size}</p>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Description: {product.description}</p>
                
                {
                    onCarrito===0 ? (
                        <>
                            <ItemCount action={onAdd} stock={product.stock}/>
                        </>
                    ) : (
                        <div className="menus">
                            <Link to={"/products"}>
                                <button className="btn-detail">Continuar compra</button>
                            </Link>
                            <Link to={"/cart"}>
                                <button className="btn-detail2">Finaizar compra</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}

export default ItemDetail;
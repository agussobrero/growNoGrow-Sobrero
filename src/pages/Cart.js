import React, {useContext, useState} from "react";
import { CartContext } from "../Components/Context/CartContext";
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Modal from "../Components/Modal/Modal";
import db from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "./PagesStyles/cart.css";

const Cart = () => {

    const {cartProducts, deleteProduct, deleteCart, totalCart} = useContext(CartContext)

    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState(
        {
            name: "",
            phone: "",
            email: "" 
        }
    )
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct)=> {
                const {id, prod, price} = cartProduct
                return {
                    id: id,
                    prod: prod,
                    price: price
                }
            }),
            total: totalCart()
        }
    )   

    const [successOrder, setSuccessOrder] = useState()      

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        let prevOrder = {
            ...order,
            buyer: formData
        }
        setOpenModal(true)
        e.preventDefault()
        setOrder({
            ...order,
            buyer: formData
        })
        pushOrderFirestore(prevOrder)
    }

    const pushOrderFirestore = async (prevOrder) =>{
        const orderFirestore = collection(db, "orders")
        const orderDoc = await addDoc(orderFirestore, prevOrder)
        console.log("orden", order)
        console.log("orden generada", orderDoc)
        setSuccessOrder(orderDoc.id)
    }

    return(
        <div>
            <div className="cart-main">
                <h1 className="cart-h1">Su carrito de Compras</h1>

                {
                    (cartProducts.length === 0) 
                    
                    &&
                    <div>
                        <h4 className="cart-h4">Su carrito est?? vacio</h4>
                        <Link to={"/products"}>
                            <button className="btn-cart">Ver Productos</button>
                        </Link>
                    </div>
                }
                {
                    <Container>
                        {cartProducts.map((cartProduct)=>{
                            const {id, url, prod, size, quantity, price} = cartProduct

                            return(
                                <MenuItem className='item-cart' key={id}>
                                    <img src={url} alt="imgProd" className="img-cart"></img>
                                    <h2>{prod}</h2>
                                    <p>Tama??o: {size}</p>
                                    <p>Cantidad: {quantity}</p>
                                    <p>Precio: {price}</p>
                                    <button className="btn-cart2" onClick={()=>deleteProduct(cartProduct)}>Delete Product</button>
                                </MenuItem>
                                )       
                            })}
                    </Container>
                }
                {
                    (cartProducts.length >= 1) 

                    &&
                    <div>
                        <h3 className="cart-h3">Total Carrito $: {totalCart()}</h3>
                        <button className="btn-cart" onClick={()=>deleteCart()}>Delete Cart</button>
                        <Link to={"/products"}>
                            <button className="btn-cart">Continuar Comprando</button>
                        </Link>
                        <button className="btn-cart" onClick={()=>setOpenModal(true)}>Finalizar Compra</button>
                    </div>
                }
            </div>
            <Modal handleClose={()=> (setOpenModal(false))} open={openModal}>

                {
                    successOrder ? (
                        <div className="div-order">
                            <h3 className="order-h3">Su pedido ha sido procesado</h3>
                            <h4>N?? de pedido: {successOrder}</h4>
                            <Link to={"/products"}>
                                <button className="btn-form" onClick={deleteCart}>Aceptar</button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <form className="form" onSubmit={handleSubmit}>
                            <h2 className="cart-form-h2">Datos del Cliente</h2>
                                {console.log(formData)}
                                {console.log(order)}
                                <input type="text" placeholder="Nombre" name="name" onChange={handleChange} value={formData.name}/>
                                <input type="number" placeholder="Telefono" name="phone" onChange={handleChange} value={formData.phone}/>
                                <input type="email" placeholder="email" name="email" onChange={handleChange} value={formData.email}/>
                                <button className="btn-form" type="submit">Enviar Formulario</button>
                            </form>
                        </>
                    )
                }
            </Modal>
        </div>
    )
}

export default Cart;
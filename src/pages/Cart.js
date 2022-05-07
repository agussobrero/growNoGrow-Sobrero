import React, {useContext, useState} from "react";
import { CartContext } from "../Components/Context/CartContext";
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Modal from "../Components/Modal/Modal";
import db from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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
            <div>
                <h1>Su carrito de Compras</h1>

                {
                    (cartProducts.length === 0) 
                    
                    &&
                    <div>
                        <h4>Su carrito está vacio</h4>
                        <Link to={"/products"}>
                            <Button>Ver Productos</Button>
                        </Link>
                    </div>
                }
                {
                    <Container>
                        {cartProducts.map((cartProduct)=>{
                            const {id, url, prod, size, quantity, price} = cartProduct

                            return(
                                <MenuItem className='item-cart-modal' key={id}>
                                    <img src={url} alt="imgProd" className="img-card"></img>
                                    <h2>{prod}</h2>
                                    <p>Tamaño: {size}</p>
                                    <p>Cantidad: {quantity}</p>
                                    <p>Precio: {price}</p>
                                    <Button onClick={()=>deleteProduct(cartProduct)}>Delete Product</Button>
                                </MenuItem>
                                )       
                            })}
                    </Container>
                }
                {
                    (cartProducts.length >= 1) 

                    &&
                    <div>
                        <h3>Total Carrito: {totalCart()}</h3>
                        <Button onClick={()=>deleteCart()}>Delete Cart</Button>
                        <Link to={"/products"}>
                            <Button>Continuar Comprando</Button>
                        </Link>
                        <Button onClick={()=>setOpenModal(true)}>Finalizar Compra</Button>
                    </div>
                }
            </div>
            <Modal handleClose={()=> (setOpenModal(false))} open={openModal}>

                {
                    successOrder ? (
                        <>
                            <h3>Su pedido ha sido procesado</h3>
                            <h4>Nº de pedido: {successOrder}</h4>
                            <Link to={"/products"}>
                                <Button onClick={deleteCart}>Aceptar</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <h2>Datos del Cliente</h2>
                            <form onSubmit={handleSubmit}>
                                {console.log(formData)}
                                {console.log(order)}
                                <input type="text" placeholder="Nombre" name="name" onChange={handleChange} value={formData.name}/>
                                <input type="number" placeholder="Telefono" name="phone" onChange={handleChange} value={formData.phone}/>
                                <input type="email" placeholder="email" name="email" onChange={handleChange} value={formData.email}/>
                                <Button type="submit">Enviar Formulario</Button>
                            </form>
                        </>
                    )
                }
            </Modal>
        </div>
    )
}

export default Cart;
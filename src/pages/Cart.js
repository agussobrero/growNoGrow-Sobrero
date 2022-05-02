import React, {useContext} from "react";
import { CartContext } from "../Components/Context/CartContext";
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Cart = () => {

    const {cartProducts, deleteProduct, deleteCart, totalCart} = useContext(CartContext)

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
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;
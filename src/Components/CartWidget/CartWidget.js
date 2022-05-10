import React, {useContext, useState} from "react";
import "../CartWidget/CartWidget.css";
import { CartContext } from "../Context/CartContext";
import { Container } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {cartProducts, quantCart} = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget)}

    const handleClose = () => {
    setAnchorEl(null)}

    return (
        <div className='cart-button'>
            <div 
                className="cartWidget"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <img alt="cart" src="../cart-shopping2.png" className="cart-img"></img>
                {
                    (cartProducts.length >0 
                        && 
                        <p className="cart-number">{quantCart()}</p>
                    )
                    
                }
            </div>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p className="cartW-p">Carrito de Compras</p>
                <Container>
                {cartProducts.map((cartProduct)=>{
                    return(
                        <MenuItem className='cartW-modal' key={cartProduct.id}>
                                <img src={cartProduct.url} alt="imgProd" className="img-card"></img>
                                <h2 className='h2-modal'>{cartProduct.prod}</h2>
                                <p>Tamaño: {cartProduct.size}</p>
                                <p>Precio: {cartProduct.price}</p>
                        </MenuItem>
                    )
                })}
                </Container>
                <div>
                    <Link to={"/cart"}>
                        <button className="btn-cartW">Iniciar la compra</button>
                    </Link>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget
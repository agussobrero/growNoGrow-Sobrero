import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = ({children})=> {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) =>{
        
        if(isInCart(product.id)){
            const prod = cartProducts.find((prod)=> prod.id === product.id )
            const {quantity} = prod

            prod.quantity = product.quantity + quantity
            const newCart = [...cartProducts]
            setCartProducts(newCart)
        }
        else(
            setCartProducts(cartProducts => [...cartProducts, product])
        )
    }

    const isInCart = (id) =>{
        return(
            cartProducts.some(product => product.id === id)
        )
    }

    const deleteProduct = (product) =>{
        return(
            setCartProducts(cartProducts.filter((cartProduct)=>{
                return(
                    cartProduct.id !== product.id
                )
            })
        ))
    }

    const deleteCart = () =>{
        setCartProducts([])
    }

    const quantCart = () =>{
        return(
            cartProducts.reduce((acum, product) => acum += product.quantity, 0 )
        )
    }

    const totalCart = () =>{
        return(
            cartProducts.reduce((acum, product) => acum += (product.quantity * product.price), 0)
        )
    }

    const data = {
        cartProducts,
        addProductToCart,
        deleteProduct,
        deleteCart,
        quantCart,
        totalCart
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext}
export default CartProvider
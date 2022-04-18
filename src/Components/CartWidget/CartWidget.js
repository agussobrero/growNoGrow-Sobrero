import React from "react";
import "../CartWidget/CartWidget.css";

const CartWidget = () => {
    return(
        <div className="cart-div">
            <img alt="cart" src="../cart-shopping2.png" className="cart-img"></img>
            <p className="cart-number">6</p>
        </div>
    )
}

export default CartWidget
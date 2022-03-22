import React, {useState} from "react";
import "./MainCard.css"

const MainCard = (props)=> {
    const {product, brand, price} = props;
    const [count, setCount] = useState(1);

    const handleClickAdd = () =>{
        setCount(count + 1);
    }

    const handleClickSub = () =>{
        setCount(count - 1)
    }

    return(
        <div>
            {/* <img src="./starEffect.png" alt="starIcon" className="starIcon"></img> */}
            <div className="card">
                
                <h2>{product}</h2>
                <p>Marca: {brand}</p>
                <p>Precio: {price}</p>
                <div>
                <button onClick={handleClickAdd}>+</button>
                <p>Cantidad: {count}</p>
                <button onClick={handleClickSub}>-</button>
                </div>
                <button onClick={handleClickAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default MainCard
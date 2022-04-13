import React, {useState} from "react";

const ItemCount = (props) =>{
    const {stock} = props
    const {action} = props
    const [count, setCount] = useState(0)

    const handleClickAdd = () =>{
        if(count<stock) {
        setCount(count + 1);
        }
    }

    const handleClickSub = () =>{
        if(count>1) {
            setCount(count - 1)
        }
        else{
            setCount(1)
        }
    }

    return(
        <>
            <div>
                <button onClick={handleClickAdd}>+</button>
                <p>Cantidad: {count}</p>
                <button onClick={handleClickSub}>-</button>
            </div>
            <button onClick={(e)=>action(e)}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount
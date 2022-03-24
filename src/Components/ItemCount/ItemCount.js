import React, {useState} from "react";

const ItemCount = (props) =>{
    const {stock} = props
    const [count, setCount] = useState(1)

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

    const onAdd = () =>{
        alert(`usted esta llevando: ${count} productos en el carrito`)
    }

    return(
        <>
            <div>
                <button onClick={handleClickAdd}>+</button>
                <p>Cantidad: {count}</p>
                <button onClick={handleClickSub}>-</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount
import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./ListProducts.css";
import data from "../Data/data";
import { useParams } from "react-router-dom";

const ListProducts = ()=> {

    const [products, setProducts] = useState([]);

    const {category} = useParams()

    const [loading, setLoading] = useState(true)

    const dataProducts = data.productsList;

/*     const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget)}

    const handleClose = () => {
    setAnchorEl(null)} */

    const getProducts = () =>{
        return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const myData = category ? dataProducts.filter( (product)=> product.category === category) : dataProducts
            resolve (myData)
        }, 2000)
        })
    }
    
    useEffect ( () => {
        setLoading(true)
        setProducts([])
        getProducts().then ((result) => {
            setProducts(result)
    })
    .finally(()=> setLoading(false))
    },[category])

    return(
        loading ? (<h2>Loading...</h2>) : ( 
            <div className="div-mainCard"> 
                {
                products.map((product) =>{
                    return(
                        <Card data={product} key={product.id}/>
                    )
                })
                }
            </div>
        )
    )
}

export default ListProducts
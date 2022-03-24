import React from "react";
import MainCard from "../MainCard/MainCard";
import "./ListProducts.css";

const ListProducts = ({children})=> {

    let dataProduct = {
        product:"ferti",
        brand:"ferti fox",
        price:200,
        stock:6
    }

    return(
        <div className="div-mainCard"> 
            <h2>{children}</h2>
            {/* <MainCard data={dataProduct}/> */}
            <MainCard product="tierra" brand="growmix" price="2000" stock="5" initial="1" onAdd/>
            <MainCard product="tierra" brand="d3" price="2200" stock="4" initial="1" onAdd/>
            <MainCard product="maceta" brand="root" price="75" stock="10" initial="1" onAdd/>
            <MainCard product="maceta" brand="root" price="80" stock="12" initial="1" onAdd/>
            <MainCard product="maceta" brand="soplada" price="82" stock="8" initial="1" onAdd/>
        </div>
    )
}

export default ListProducts
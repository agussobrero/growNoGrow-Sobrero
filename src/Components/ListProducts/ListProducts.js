import React from "react";
import MainCard from "../MainCard/MainCard";
import "./ListProducts.css";

const ListProducts = ({children})=> {
    return(
        <div className="div-mainCard"> 
            <h2>{children}</h2>
            <MainCard product="tierra" brand="growmix" price="2000" qty="50"/>
            <MainCard product="tierra" brand="d3" price="2200" qty="46"/>
            <MainCard product="maceta" brand="root" price="75" qty="100"/>
            <MainCard product="maceta" brand="root" price="80" qty="120"/>
            <MainCard product="maceta" brand="soplada" price="82" qty="87"/>
        </div>
    )
}

export default ListProducts
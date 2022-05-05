import React from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Cart from "./pages/Cart";
import CartProvider from "./Components/Context/CartContext";
import CartWidget from "./Components/CartWidget/CartWidget";


function App() {
  // eslint-disable-next-line

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/reviews" element={<Reviews />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/cartWidget" element={<CartWidget />}/>
            <Route path="/product/:id" element={<ItemDetail />}/>
            <Route path="/:category/" element={<Products />}/>
            <Route path="/home" element={<Home />}/>        
            <Route path="/cart" element={<Cart />}/>        
            <Route path="*" element={<Error />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

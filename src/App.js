import React, {useState} from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
/* import ListProducts from "./Components/ListProducts/ListProducts";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  const [outDoor, setOutDoor] = useState(true);

  // eslint-disable-next-line
  const handleHideOutDoor = () => {
    return (
      setOutDoor(!outDoor) /* no lo logro hacer funcionar */
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/product/:id" element={<ItemDetailContainer />}/>
          <Route path="/:category/" element={<Products />}/>
{/*           <Route path="/:category/:id" element={<ItemDetailContainer />}/> */}
          <Route path="/home" element={<Home />}/>
          
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ListProducts from "./Components/ListProducts/ListProducts";


function App() {
  const [outDoor, setOutDoor] = useState(true);

  const handleHideOutDoor = () => {
      return (
          setOutDoor(!outDoor) /* no lo logro hacer funcionar */
      )
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        <div className="div-listProd">
          <ListProducts className="div-outdoor">
            <button onClick={handleHideOutDoor}>Outdoor</button>
            <p className="p-listProd">Ofertas</p>
          </ListProducts>
        </div>
      </main> 
    </div>
  );
}

export default App;

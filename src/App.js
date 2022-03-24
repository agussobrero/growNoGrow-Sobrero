import React, {useState} from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ListProducts from "./Components/ListProducts/ListProducts";


function App() {
  const [outDoor, setOutDoor] = useState(true);

  const handleHideOutDoor = () => {
      setOutDoor(!outDoor)
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="div-listProd">
          <ListProducts>
            <h4>Indoor</h4>
            <p className="p-listProd">Ofertas</p>
          </ListProducts>
          <ListProducts className="div-outdoor">
            <button className="hideOutdoor" onClick={handleHideOutDoor}>Outdoor</button>
            <p className="p-listProd">Ofertas</p>
          </ListProducts>
        </div>
      </main> 
    </div>
  );
}

export default App;

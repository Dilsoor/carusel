import "./App.css";
import Carusel from "./components/Carusel";
import { flowers } from "./components/Data";

function App() {
  return (
    <div className="App">
      <div className="topContent">
        <h1>Flowers</h1>
      </div>
      {/* Carusel  */}
      <Carusel images={flowers} />
    </div>
  );
}

export default App;

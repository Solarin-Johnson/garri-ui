import { useState } from "react";
import "./App.scss";
import Home from "./pages/home";
import Navigation from "./pages/navigation";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <Navigation index={(e) => setIndex(e)} />
      <Home pageIndex={index} />
    </div>
  );
}

export default App;

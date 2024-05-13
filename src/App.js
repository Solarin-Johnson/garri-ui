import "./App.scss";
import Home from "./pages/home";
import Navigation from "./pages/navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;

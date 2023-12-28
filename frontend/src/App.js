import logo from "./logo.svg";
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Allroutes />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import { BrowserRouter } from "react-router-dom";
// import bootstrap from "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;

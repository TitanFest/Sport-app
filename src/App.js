import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Equipos from "./Pages/Equipos";
import Login from "./Pages/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Equipos" element={<Equipos />} />
        <Route path="*" element={<noEncontrado/>}/>
      </Routes>
  );
}
export default App;

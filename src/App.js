import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Eventos from "./Pages/Eventos";
import Equipos from "./Pages/Equipos";
import Login from "./Pages/Login";
import EquipoDetalles from "./Pages/EquipoDetalles"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Equipos" element={<Equipos />} />
        <Route path="/EquipoDetalles/:EquipoId" element={<EquipoDetalles />} />
        <Route path="*" element={<noEncontrado/>}/>
      </Routes>
  );
}
export default App;

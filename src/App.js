import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Login from "./Pages/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<noEncontrado/>}/>
      </Routes>
  );
}
export default App;

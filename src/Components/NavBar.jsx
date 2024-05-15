import {Link} from "react-router-dom"
import "../Style/NavBar.css"
const NavBar= () =>{
    return (
    <nav>
        <ul>
            <li>
                <Link to="/Home">Inicio</Link>
            </li>
            <li>
                <Link to="/about">Acerca de</Link>
            </li>
            <li>
                <Link to="/products">Productos</Link>
            </li>
            <li className="cerrar-sesion">
                <Link to="/">Cerrar sesion</Link>
            </li>
        </ul>
    </nav>
    );
}

export default NavBar;
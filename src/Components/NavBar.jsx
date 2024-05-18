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
                <Link to="/Eventos">Eventos</Link>
            </li>
            <li>
                <Link to="/Equipos">Equipos</Link>
            </li>
            <li className="cerrar-sesion">
                <Link to="/">Cerrar sesion</Link>
            </li>
        </ul>
    </nav>
    );
}

export default NavBar;
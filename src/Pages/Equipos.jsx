import NavBar from "../Components/NavBar"
import imagenes from "./Imagenes/imagenes";
import "../Style/Equipos.css"
const Products = () => {

  const equipos=[
    {
      id: 1,
      Nombre: "Barcelona",
      imagen: imagenes[0]      
    },

    {
      id: 2,
      Nombre: "Manchester city",
      imagen: imagenes[1]   
    },

    {
      id: 3,
      Nombre: "Liverpool",
      imagen: imagenes[2]   
    }
  ];
  


  return (
    <>
      <NavBar />
      <div className="Equipos">

        <h1 id="Titulo">Equipos</h1> 

        <div className="Secciones"> 

          <div className="Seccion"> 

            {equipos.slice(0, 3).map((equipo) => (

              <div key={equipo.id} className="Equipo"> 
                <img src={equipo.imagen} alt={equipo.Nombre + "-img"} className="imagen-equipo" />
                <p>{equipo.Nombre}</p>
              </div>

            ))}

          </div>

          <div className="Seccion"> 

            {equipos.slice(3).map((equipo) => (
              <div key={equipo.id} className="Equipo"> 
                <img src={equipo.imagen} alt={equipo.Nombre + "-img"} className="imagen-equipo" />
                <p>{equipo.Nombre}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>);
};
  export default Products;
  
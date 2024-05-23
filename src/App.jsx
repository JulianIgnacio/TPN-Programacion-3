import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Instagram, Whatsapp, Github,Linkedin} from "react-bootstrap-icons";
import FotoPersonal from '../src/assets/FotoPersonal.jpg'
import '../src/App.css'

function App() {
  
  const Alumno = {

    nombre: ["Julian","Ignacio"],
    apellido: "Montenegro",
    edad: 24,
    telefono: 3814093577,
    nacionalidad:"Argentina",
    direccion:"Barrio el Solar mza c casa 6 Las Talitas",
    imagen: <img className="rounded-circle" src={FotoPersonal} alt="Foto Personal"/>,
    Experiencia_Laboral: ["Sanatorio 9 de Julio","Hospital Nicolas Avellaneda"],
    RolyTareas: ["Celula de Registro  y participe dentro del equipo de implementacion en un sistema","Las tareas realizadas fueron soporte en las videoconferencias y reuniones de adherencia,Grabacion de estas reuniones,Depuracion de tablas de datos, manejo y control de registros en el sistema de prueba ","Tecnico de computos","Soporte y registro en manejos de sistema, mantenimiento de aparatos de hardware , administracion de usuarios locales en la institucion, mantenimiento de servidores"],
    InstitucionesEstudio: ["Escuela Normal Juan B Alberdi","Universidad Tecnologica Nacional","Rolling Code","EGG"],
    Estudios: ["Tecnico universitario en Programacion(En proceso)","Full stack Web Developer","QA"],
    RedesSociales:[<a href="" className="m-2"><Instagram></Instagram></a>,<a href="" className="m-2"><Github></Github></a>,<a href="" className="m-2"><Linkedin></Linkedin></a>]
  }

  return (
    <>
    <Home alumno = {Alumno}></Home>    
    </>
  )
}

export default App

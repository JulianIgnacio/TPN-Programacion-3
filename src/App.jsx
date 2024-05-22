import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FotoPersonal from '../src/assets/FotoPersonal.jpg'

function App() {
  
  const Alumno = {

    nombre: ["Julian","Ignacio"],
    apellido: "Montenegro",
    edad: 24,
    nacionalidad:"Argentina",
    direccion:"Barrio el Solar mza c casa 6 Las Talitas",
    imagen: <img src={FotoPersonal} alt="Foto Personal"/>,
    Experiencia_Laboral: ["Sanatorio 9 de Julio","Hospital Nicolas Avellaneda"],
    InstitucionesEstudio: ["Escuela Normal Juan B Alberdi","Universidad Tecnologica Nacional","Rolling Code","EGG"],
    Estudios: ["Tecnico universitario en Programacion(En proceso)","Full stack Web Developer","QA"]
  }

  return (
    <>
    <Home alumno = {Alumno}></Home>
    </>
  )
}

export default App

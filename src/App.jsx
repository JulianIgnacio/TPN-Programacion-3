import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FotoPersonal from '../src/assets/FotoPersonal.jpg'

function App() {
  
  const Alumno = {

    nombre: "Julian",
    apellido: "Montenegro",
    edad: 24,
    imagen: <img src={FotoPersonal} alt="Foto Personal"/>,
    Experiencia_Laboral: ["Sanatorio 9 de Julio","Hospital Nicolas Avellaneda"]
  }

  return (
    <>
    <Home alumno = {Alumno}></Home>
    </>
  )
}

export default App

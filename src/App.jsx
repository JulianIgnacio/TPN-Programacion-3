import Home from './pages/Home'
import FotoPersonal from '../src/assets/FotoPersonal.jpg'

function App() {
  
  const Alumno = {

    nombre: "Julian",
    apellido: "Montenegro",
    edad: 24,
    imagen: {FotoPersonal},
    Experiencia_Laboral: ["Sanatorio 9 de Julio","Hospital Nicolas Avellaneda"]
  }

  return (
    <>
    <Home></Home>
    </>
  )
}

export default App

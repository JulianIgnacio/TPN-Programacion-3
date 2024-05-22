import '../css/header.css'

const Header = (props) => {


    return (
        <>
        <div className='d-flex justify-content-evenly'>
                    {props.Alumno.imagen}
            <h1>{props.Alumno.nombre} {props.Alumno.apellido}</h1>
        </div>
        </>
    )
}

export default Header;
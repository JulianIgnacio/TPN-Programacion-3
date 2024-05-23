import '../css/header.css'
import { Container } from 'react-bootstrap';

const Header = (props) => {


    return (
        <>
        <Container>
            <div className='d-flex justify-content-evenly m-3'>
                    {props.Alumno.imagen}
            <h1>{props.Alumno.nombre[0]} {props.Alumno.apellido}</h1>
        </div>
        </Container>
        </>
    )
}

export default Header;
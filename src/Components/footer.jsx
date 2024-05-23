import { Container, Row ,Col} from "react-bootstrap";
import '../css/footer.css'

const Footer = (props) => {
    return (
        <>
     {// la propiedad container se invoca desde react-bootsrap
     } 
            <Container className="footer">
        <div>
            <h5>Redes Sociales</h5>
                {props.Alumno.RedesSociales}
        </div>
            </Container>
        </>
    )
}

export default Footer;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card , Accordion} from 'react-bootstrap';
import '../css/main.css'

const Main = (props) => {
    return ( 
        <>
        {//las cards row,col,container y Accordion se llaman desde react-bootstrap 
}
        <Container >
        <Row xs={1} md={2}  className="g-2">
        <Col>
          <Card border='primary' style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Datos Personales</Card.Title>
              <Card.Text>
                <ul>
                <li>Nombre Completo: {props.Alumno.nombre[0]} {props.Alumno.nombre[1]} {props.Alumno.apellido}</li>
                <li>Edad:{props.Alumno.edad}</li>
                <li>Nacionalidad: {props.Alumno.nacionalidad}</li>
                <li>Telfono: {props.Alumno.telefono}</li>
                <li>Direccion: {props.Alumno.direccion}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='primary' style={{ width: '30rem' , height: '11rem'}}>
            <Card.Body>
              <Card.Title>Estudios</Card.Title>
              <Card.Text>
                <ul>
                    <li>{props.Alumno.Estudios[0]}</li>
                    <li>{props.Alumno.Estudios[1]}</li>
                    <li>{props.Alumno.Estudios[2]}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='primary' style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Instituciones en las que estudio</Card.Title>
              <Card.Text>
                <ul>
                    <li>{props.Alumno.InstitucionesEstudio[0]}</li>
                    <li>{props.Alumno.InstitucionesEstudio[1]}</li>
                    <li>{props.Alumno.InstitucionesEstudio[2]}</li>
                    <li>{props.Alumno.InstitucionesEstudio[3]}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border='primary' style={{ width: '30rem' , height: '11rem'}}>
            <Card.Body>
              <Card.Title >Experiencia Laboral</Card.Title>
              <Card.Text>
                <Accordion className='bg-dark' defaultActiveKey="0">
                  <Accordion.Item className='bg-dark' eventKey="0">
                    <Accordion.Header>{props.Alumno.Experiencia_Laboral[0]}</Accordion.Header>
                    <Accordion.Body>
                      Rol que ocupaba:
                      <br />
                       {props.Alumno.RolyTareas[0]}
                      <br />
                      Tareas que se realizaban:
                      <br />
                      {props.Alumno.RolyTareas[1]}
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='bg-dark' eventKey="1">
                      <Accordion.Header>{props.Alumno.Experiencia_Laboral[1]}</Accordion.Header>
                      <Accordion.Body>

                      </Accordion.Body>
                      </Accordion.Item>
                      </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
        </Container>
        </>
    )
}

export default Main;
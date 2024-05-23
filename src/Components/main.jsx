import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card , Button , Collapse} from 'react-bootstrap';
import '../css/main.css'

const Main = (props) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

    return ( 
        <>
        {//las cards row,col,container se llaman desde react-bootstrap 
}
        <Container >
        <Row xs={1} md={2}  className="g-2">
        <Col>
          <Card border='primary' style={{ width: '30rem' , height: '16rem'}}>
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
          <Card border='primary' style={{ width: '30rem' , height: '16rem'}}>
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
          <Card border='primary' style={{ width: '30rem' ,height: '16rem'}}>
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
          <Card className='d-flex'border='primary' style={{ width: '30rem' , minheight: '11rem'}}>
            <Card.Body>
              <Card.Title >Experiencia Laboral</Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-evenly'>
              <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              >
                {props.Alumno.Experiencia_Laboral[0]}
              </Button>
              <Button
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text2"
              aria-expanded={open2}
              >
                {props.Alumno.Experiencia_Laboral[1]}
              </Button>
                </div>
                <section className='d-flex justify-content-evenly'>
                <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                  <div id="example-collapse-text">
                    <Card body style={{ width: '400px' , color:'white'}}>
                    Rol que ocupaba:
                      <br />
                       {props.Alumno.RolyTareas[0]}
                      <br />
                      Tareas que se realizaban:
                      <br />
                      {props.Alumno.RolyTareas[1]}
                    </Card>
                  </div>
                </Collapse>
              </div>
              <div style={{ minHeight: '150px' }}>
                <Collapse in={open2} dimension="width">
                  <div id="example-collapse-text2">
                    <Card body style={{ width: '450px' , color:'white'}}>
                    Rol que ocupaba:
                      <br />
                       {props.Alumno.RolyTareas[2]}
                      <br />
                      Tareas que se realizaban:
                      <br />
                      {props.Alumno.RolyTareas[3]}
                    </Card>
                  </div>
                </Collapse>
              </div>
                </section>

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
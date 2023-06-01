import { Button, Card, Col } from "react-bootstrap";

const CardPacientes = ({ pacientes }) => {
  return (
    <>
      <Col xs md="3" key={i}>
        <Card className="">
          <Card.Header>
            <h6>Mascota: {e.nombre}</h6>
            <p className="small m-0">Dueño: {e.duenio}</p>
          </Card.Header>
          <Card.Body>
            <p>Fecha: {e.fecha}</p>
            <p>Hora: {e.hora}</p>
            <p>Sintomas: {e.sintoma}</p>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger">Borrar</Button>
          </Card.Footer>
        </Card>
      </Col>
      ;
    </>
  );
};

export default CardPacientes;

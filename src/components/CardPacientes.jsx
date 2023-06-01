import { Button, Card, Col } from "react-bootstrap";

const CardPacientes = ({objeto, borrarTurno}) => {
  return (
    <>
      <Col xs md="3">
        <Card className="h-100">
          <Card.Header>
            <h6>Mascota: {objeto.nombre}</h6>
            <p className="small m-0">Dueño: {objeto.duenio}</p>
          </Card.Header>
          <Card.Body>
            <p>Fecha: {objeto.fecha}</p>
            <p>Hora: {objeto.hora}</p>
            <p>Sintomas: {objeto.sintoma}</p>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={()=>borrarTurno(objeto.hora)}>Borrar</Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default CardPacientes;

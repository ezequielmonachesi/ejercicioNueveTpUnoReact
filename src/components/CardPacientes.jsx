import { Button, Card, Col } from "react-bootstrap";

const CardPacientes = () => {
    return (
        <Col xs md="3">
        <Card className="">
            <Card.Header>
                <h6>Mascota: Pepe</h6>
                <p className="small m-0">Dueño: Pedro</p>
            </Card.Header>
            <Card.Body>
                <p>Fecha: 10/12</p>
                <p>Hora: 10:00</p>
                <p>Sintomas</p>
            </Card.Body>
            <Card.Footer>
                <Button variant="danger">
                    Borrar
                </Button>
            </Card.Footer>
        </Card>
        </Col>
    );
};

export default CardPacientes;
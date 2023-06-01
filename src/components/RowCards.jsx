import { Row } from "react-bootstrap";
import CardPacientes from "./CardPacientes";

const RowCards = ({pacientes, borrarTurno}) => {
  return (
    <Row className="mt-4">
        {pacientes.map((elemento, indice)=><CardPacientes objeto={elemento} borrarTurno={borrarTurno} key={indice}></CardPacientes>)}
    </Row>
  );
}

export default RowCards;

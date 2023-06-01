import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFormulario from './components/CardFormulario';


function App() {

  return (
    <>
    <Container className='main'>
    <h1>Administrar pacientes de una veterinaria</h1>
      <CardFormulario></CardFormulario>
    </Container>  
    <footer className="bg-dark py-5 text-light text-center mt-5">
        <p>&copy; Todos los derechos reservaods.</p>
      </footer>
    </>
  )
}

export default App

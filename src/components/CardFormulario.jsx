import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import RowCards from "./RowCards";

const CardFormulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [formularios, setFormularios] = useState(JSON.parse(localStorage.getItem('formularios')) || []);

  const borrarTurno = (hora) => {
    let copiaFormulario = formularios.filter((elemento) => elemento.hora !== hora);
    setFormularios(copiaFormulario);
  }

  useEffect(()=>{
    localStorage.setItem('formularios', JSON.stringify(formularios));
  })

  return (
    <>
      <Card className="mx-lg-5">
        <Card.Header>Llenar formulario para crear cita</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit((data)=>
            setFormularios([...formularios, data])
            )
            } className="mx-3 mt-3 py-3">
            <div className="d-flex flex-wrap justify-content-start">
              <Form.Group className="mb-3 me-3" controlId="nombre">
                <Form.Label>Nombre de mascota</Form.Label>
                <Form.Control
                  type="text"
                  {...register("nombre", {
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                  })}
                  placeholder="Ingrese su nombre"
                />
                {errors.nombre?.type === "required" && (
                  <p className="text-danger small">* El campo es requerido.</p>
                )}
                {errors.nombre?.type === "minLength" && (
                  <p className="text-danger small">
                    * Debe tener más de 3 caracteres.{" "}
                  </p>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <p className="text-danger small">
                    * Debe tener hasta 20 caracteres.{" "}
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3 me-3" controlId="nombreDuenio">
                <Form.Label>Nombre de dueño</Form.Label>
                <Form.Control
                  type="text"
                  {...register("duenio", {
                    required: true,
                    maxLength: 25,
                    minLength: 3,
                  })}
                  placeholder="Ingrese su dueño"
                />
                {errors.duenio?.type === "required" && (
                  <p className="text-danger small">* El campo es requerido.</p>
                )}
                {errors.duenio?.type === "minLength" && (
                  <p className="text-danger small">
                    * Debe tener más de 3 caracteres.
                  </p>
                )}
                {errors.duenio?.type === "maxLength" && (
                  <p className="text-danger small">
                    * Debe tener hasta 25 caracteres.
                  </p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="Sintoma">
                <Form.Label>Sintomas</Form.Label>
                <Form.Control
                  type="text"
                  {...register("sintoma", {
                    required: true,
                    maxLength: 25,
                    minLength: 3,
                  })}
                  placeholder="Ingrese su síntoma"
                />
                {errors.sintoma?.type === "required" && (
                  <p className="text-danger small">* El campo es requerido.</p>
                )}
                {errors.sintoma?.type === "minLength" && (
                  <p className="text-danger small">
                    * Debe tener más de 3 caracteres.
                  </p>
                )}
                {errors.sintoma?.type === "maxLength" && (
                  <p className="text-danger small">
                    * Debe tener hasta 25 caracteres.
                  </p>
                )}
              </Form.Group>
            </div>
            <div className="d-flex justify-content-start">
              <Form.Group className="me-3">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  {...register("fecha", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  {...register("hora", {
                    required: true,
                  })}
                />
              </Form.Group>
            </div>
            <Button className="mt-3" variant="dark" type="submit">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <RowCards pacientes={formularios} borrarTurno={borrarTurno}></RowCards>
    </>
  );
};

export default CardFormulario;
